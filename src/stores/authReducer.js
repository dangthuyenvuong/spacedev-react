import { getUser } from "@/utils/token"
import {  LOGOUT_ACTION, SET_USER_ACTION } from "./action"

const initialState = {
    user: getUser()
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGOUT_ACTION:
            return {
                ...state,
                user: null
            }

        case SET_USER_ACTION:
            return {
                ...state,
                user: action.payload
            }

        default: return state
    }
}
