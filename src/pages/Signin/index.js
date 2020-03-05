import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, Content } from './styles';

import Logo from '../../assets/images/logo.svg';
import { signinRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('O email deve ser válido')
        .required('Email é obrigatória'),
    password: Yup.string().required('Senha é obrigatória')
});

export default function Signin() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);

    function handleSubmit({ email, password }) {
        dispatch(signinRequest(email, password));
    }

    return (
        <Wrapper>
            <Content>
                <img src={Logo} alt="Gobarber" />
                <Form onSubmit={handleSubmit} schema={schema}>
                    <Input name="email" placeholder="Email" />
                    <Input
                        name="password"
                        type="password"
                        placeholder="Senha"
                    />
                    <button type="submit">
                        {loading ? 'Carregando...' : 'Acessar'}
                    </button>
                </Form>
                <div>
                    <Link to="/register">Cria sua conta gratuita</Link>
                </div>
            </Content>
        </Wrapper>
    );
}
