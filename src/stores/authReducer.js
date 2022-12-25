import { clearToken, clearUser, getUser, setToken, setUser } from "@/utils/token"
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
            const res = await authService.login(data.form)
            setToken(res.data)
            const user = await userService.getProfile()
            setUser(user.data)
            dispatch({ type: SET_USER_ACTION, payload: user.data })
            data?.success(user.data)
        } catch (err) {
            data?.error(err)
        } finally {
            data?.final()
        }
    }
}

export const logoutAction = (data) => {
    return (dispatch) => {
        clearToken()
        clearUser()
        dispatch({ type: LOGOUT_ACTION })
        data?.success()
    }
}

export const setUserAction = (data) => ({
    type: SET_USER_ACTION,
    payload: data
})

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGOUT_ACTION: return { user: null }
        case SET_USER_ACTION: return { user: action.payload }
        default: return state
    }
}
