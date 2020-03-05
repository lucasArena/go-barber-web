import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';
import Avatar from '../../components/Avatar';

import { updateProfileRequest } from '../../store/modules/user/actions';
import { signOut } from '../../store/modules/auth/actions';

export default function Profile() {
    const profile = useSelector(state => state.user.profile);
    const dispatch = useDispatch();

    function handleSubmit(data) {
        dispatch(updateProfileRequest(data));
    }

    function handleSignOut(e) {
        dispatch(signOut());
    }

    return (
        <Container>
            <Form initialData={profile} onSubmit={handleSubmit}>
                <Avatar name="avatar_id" />
                <Input name="name" placeholder="Nome completo" />
                <Input name="email" placeholder="Seu email" />

                <hr />

                <Input name="oldPassword" placeholder="Senha atual" />
                <Input name="password" placeholder="Nova senha" />
                <Input
                    name="confirmPassword"
                    placeholder="Confirmar nova senhsa"
                />

                <button type="submit">Atualizar perfil</button>
            </Form>
            <button type="button" onClick={handleSignOut}>
                Sair do GoBarber
            </button>
        </Container>
    );
}
