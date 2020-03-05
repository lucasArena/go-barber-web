import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import { Wrapper, Content } from './styles';
import Logo from '../../assets/images/logo.svg';

import { signupRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigário'),
    email: Yup.string()
        .email('O email deve ser válido')
        .required('Senha é obrigatória'),
    password: Yup.string().required('Senha obrigátoria')
});

export default function Signup() {
    const dispatch = useDispatch();
    function handleSubmit({ name, email, password }) {
        dispatch(signupRequest(name, email, password));
    }

    return (
        <Wrapper>
            <Content>
                <img src={Logo} alt="Gobarber" />
                <Form onSubmit={handleSubmit} schema={schema}>
                    <Input name="name" placeholder="Nome completo" />
                    <Input name="email" placeholder="Email" />
                    <Input
                        name="password"
                        type="password"
                        placeholder="Senha"
                    />
                    <button type="submit">Criar conta gratuita</button>
                </Form>
                <div>
                    <Link to="/">Já tenha login</Link>
                </div>
            </Content>
        </Wrapper>
    );
}
