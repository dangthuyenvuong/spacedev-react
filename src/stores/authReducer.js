import { clearToken, clearUser, getUser, setToken, setUser } from "@/utils/token"
import { LOGOUT_ACTION, SET_USER_ACTION } from "./action"
import { authService } from "@/services/auth.service"
import { userService } from "@/services/user.service"
import { handleError } from "@/utils/handleError"
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    user: getUser(),
    status: 'idle'
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

export const loginThunkAction = createAsyncThunk('auth/login', async (data, thunkApi) => {
    try {
        const res = await authService.login(data)
        setToken(res.data)
        const user = await userService.getProfile()
        setUser(user.data)
        // thunkApi.dispatch(authActions.setUser(user.data))
        thunkApi.fulfillWithValue(user.data)
        // dispatch({ type: SET_USER_ACTION, payload: user.data })
        return user.data
    } catch (err) {
        thunkApi.rejectWithValue(err.response.data)
        throw err?.response.data
    }
})

export const logoutAction = (data) => {
    return (dispatch) => {
        clearToken()
        clearUser()
        // dispatch({ type: LOGOUT_ACTION })
        dispatch(authActions.logout())
        data?.success()
    }
}

// export const setUserAction = (data) => ({
//     type: SET_USER_ACTION,
//     payload: data
// })

// export const authReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case LOGOUT_ACTION: return { user: null }
//         case SET_USER_ACTION: return { user: action.payload }
//         default: return state
//     }
// }


export const { reducer: authReducer, actions: authActions } = createSlice({
    initialState,
    name: 'auth',
    reducers: {
        logout: (state) => {
            state.user = null
        },
        setUser: (state, action) => {
            state.user = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginThunkAction.pending, (state) => {
            state.status = 'pending'
        })
        builder.addCase(loginThunkAction.fulfilled, (state, action) => {
            state.user = action.payload
            state.status = 'success'
        })
        builder.addCase(loginThunkAction.rejected, (state) => {
            state.status = 'error'
        })
    }
})

console.log(authActions)