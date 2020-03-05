import React, { useEffect, useRef, useState } from 'react';

import { useField } from '@rocketseat/unform';
import { Container } from './styles';

import api from '../../services/api';

export default function Avatar() {
    const { defaultValue, registerField } = useField('avatar');

    const [file, setFile] = useState(defaultValue && defaultValue.id);
    const [preview, setPreview] = useState(defaultValue && defaultValue.url);

    const ref = useRef();

    useEffect(() => {
        if (ref.current) {
            registerField({
                name: 'avatar_id',
                ref: ref.current,
                path: 'dataset.file'
            });
        }
    }, [registerField, ref]);

    async function handleChangeAvatar(e) {
        const data = new FormData();

        data.append('file', e.target.files[0]);

        const avatar = await api.post('/files', data);

        setPreview(avatar.url);
        setFile(avatar.id);
    }

    return (
        <Container>
            <label htmlFor="avatar">
                <img
                    src={
                        preview ||
                        'https://api.adorable.io/avatars/50/demo@adorable.io.png'
                    }
                    alt="Icone de imagem"
                />
                <input
                    type="file"
                    accept="image/*"
                    data-file={file}
                    id="avatar"
                    ref={ref}
                    onChange={handleChangeAvatar}
                />
            </label>
        </Container>
    );
}
