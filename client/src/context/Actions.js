import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, UPDATE_FAILURE, UPDATE_START, UPDATE_SUCCESS } from "./actionsTypes"

export const LoginStart = (userCredentials) => ({
    type: LOGIN_START
})

export const LoginSucces = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user,
})

export const LoginFailure = () => ({
    type: LOGIN_FAILURE,
})

export const Logout = () => ({
    type: LOGOUT,
})

export const UPDATEStart = (userCredentials) => ({
    type: UPDATE_START
})

export const UPDATESucces = (user) => ({
    type: UPDATE_SUCCESS,
    payload: user,
})

export const UPDATEFailure = () => ({
    type: UPDATE_FAILURE,
})