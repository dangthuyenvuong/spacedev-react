import { clearToken, clearUser, getUser, setToken, setUser } from "@/utils/token"
import { LOGOUT_ACTION, SET_USER_ACTION } from "./action"
import { authService } from "@/services/auth.service"
import { userService } from "@/services/user.service"
import { handleError } from "@/utils/handleError"
import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"

// const initialState = {
//     user: getUser()
// }
// const incrementBy = createAction('incrementBy')

export const loginAction = (data) => {
    return async (dispatch) => {
        try {
            const res = await authService.login(data.data)
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

export const loginThunkAction = createAsyncThunk(`auth/login`, async (form, thunkApi) => {
    try {
        const res = await authService.login(form)
        setToken(res.data)
        const user = await userService.getProfile()
        setUser(user.data)
        // thunkApi.fulfillWithValue({ type: SET_USER_ACTION, payload: user.data })
        // data?.success(user.data)
        return user.data
    } catch (err) {
        throw err.response.data
    }
})

export const logoutAction = () => {
    return (dispatch) => {
        dispatch({ type: LOGOUT_ACTION })
        clearToken()
        clearUser()
    }
}

// export const authReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case LOGOUT_ACTION:
//             return {
//                 ...state,
//                 user: null
//             }

//         case SET_USER_ACTION:
//             return {
//                 ...state,
//                 user: action.payload
//             }

//         default: return state
//     }
// }


export const { name, reducer: authReducer, actions: authActions, caseReducers, getInitialState } = createSlice({
    name: 'auth',
    initialState: () => ({
        user: getUser(),
        status: 'idle',
        error: null
    }),
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        logout: () => {
            return { user: null }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginThunkAction.pending, (state) => {
            state.status = 'pending'
        })

        builder.addCase(loginThunkAction.fulfilled, (state, action) => {
            state.user = action.payload
            state.status = 'fulfilled'
        })

        builder.addCase(loginThunkAction.rejected, (state, action) => {
            state.error = action.payload
            state.status = 'error'
        })
    }
})





// name = 'auth'
// initialState: giá trị mặc định
// getInitialState: lấy ra giá trị mặc định, trong trường hợp initialState là một logic tính toán, truyền initalState là callback return value
// actions: Chứa danh sách function action được generate ra từ reducers
// caseReducers: chưa danh sách các reducers
