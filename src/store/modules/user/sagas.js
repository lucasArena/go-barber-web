import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import * as Actions from './actions';

import api from '../../../services/api';

function* updateProfile({ payload }) {
    try {
        const { name, email, avatar_id, ...rest } = payload.data;
        const profile = {
            name,
            email,
            avatar_id,
            ...(rest.oldPassword ? { ...rest } : {})
        };

        const user = yield call(api.put, '/users', profile);
        yield put(Actions.updateProfileSuccess(user));
        toast.success('Perfil alterado com sucesso');
    } catch (err) {
        yield put(Actions.updateProfileFailure());
        toast.error('Erro alterar o perfil do usuário');
    }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
