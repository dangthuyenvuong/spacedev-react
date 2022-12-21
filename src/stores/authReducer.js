import { getUser } from "@/utils/token"
import { LOGOUT_ACTION, SET_USER_ACTION } from "./action"
import { authService } from "@/services/auth.service"
import { userService } from "@/services/user.service"
import { handleError } from "@/utils/handleError"

const initialState = {
    user: getUser()
}


export const loginAction = (data) => {
    return async (dispatch) => {
        try {
            const res = await authService.login(data)
            setToken(res.data)
            const user = await userService.getProfile()
            setUser(user.data)
            dispatch({ type: SET_USER_ACTION, payload: user.data })
            
            return user.data
        } catch (err) {
            handleError(err)
        }
    }
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
