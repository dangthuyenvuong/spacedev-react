import { getUser } from "@/utils/token"
import {  LOGOUT_ACTION, SET_USER_ACTION } from "./action"

const initialState = {
    user: getUser()
}

export const setUserAction = (data) => ({
    type: SET_USER_ACTION,
    payload: data
})

export const logoutAction = () => {
    return {
        type: LOGOUT_ACTION
    }
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGOUT_ACTION: return { user: null }
        case SET_USER_ACTION: return { user: action.payload }
        default: return state
    }
}
