import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionsTypes"

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