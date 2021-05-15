import * as actionTypes from '../actions/actionTypes';
import { updatedObject} from "../utility";

const  initialState = {
    error: null,
    auth: false,
    user: null,
    loading: false
};

const authStart = (state, action) => {
    return updatedObject(state, {
        error: null,
        loading: true
    });
};

const authSuccess = (state, action) => {
    return updatedObject(state, {
        token: action.token,
        auth: true,
        user: action.user,
        error: null,
        loading: false
    });
};

const authFail = (state, action) => {
    return updatedObject(state, {
        error: action.error,
        loading: false,
        user: {},
        auth: false

    });
};

const authLogout = (state, action) => {
    return updatedObject(state, {
        auth: false,
        token: null
    });
};

const authReducer = (state=initialState, action) => {
    switch (action.type){
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return  authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        default:
            return state;
    };

};

export default authReducer;