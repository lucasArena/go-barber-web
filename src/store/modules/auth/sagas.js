import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '../../../services/history';
import api from '../../../services/api';

import * as authActions from './actions';

function* signIn({ payload }) {
    try {
        const { email, password } = payload;
        const { token, user } = yield call(api.post, '/sessions', {
            email,
            password
        });

        if (!user.provider) {
            toast.error('Usuário não é um prestador');
            return;
        }

        yield put(authActions.signinSuccess(token, user));
        history.push('/dashboard');
    } catch (err) {
        toast.error('Falha na autentificação, verifique seus dados!');
        yield put(authActions.signFailure());
    }
}

function* signUp({ payload }) {
    try {
        const { name, email, password } = payload;
        yield call(api.post, '/users', {
            name,
            email,
            password,
            provider: true
        });
        history.push('/');
        yield put(authActions.signinSuccess());
        toast.success('Cadastro realizado com sucesso');
    } catch (err) {
        toast.error('Erro ao tentar cadastrar o usuário');
        yield put(authActions.signFailure());
    }
}

function signOut() {
    history.push('/');
}

export function setToken({ payload }) {
    if (!payload) {
        return;
    }

    const { token } = payload.auth;
    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),
    takeLatest('@auth/SIGN_OUT', signOut)
]);
