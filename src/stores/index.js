import { createStore, combineReducers, applyMiddleware } from 'redux'
import { countReducer } from './countReducer'
import { authReducer } from './authReducer'
import { configureStore } from '@reduxjs/toolkit'
import { ENV } from '@/config'




const logMiddleware = store => next => action => {
    console.log('logMiddleware', store.getState(), action)
    next(action)
}


// const thunk = store => next => action => {
//     console.log('thunk', action)
//     if (typeof action === 'function') {
//         return action(store.dispatch)

//     }

//     next(action)
// }


// const logMiddleware2 = store => next => action => {
//     console.log('logMiddleware2', store.getState(), action)
//     next(action)
// }
// const logMiddleware3 = store => next => action => {
//     console.log('logMiddleware3', store.getState(), action)
//     next(action)
// }

// Gôm nhiều reducer lại thành 1, mỗi reducer phân biệt với nhau bởi tên của reducer
const reducers = combineReducers({
    count: countReducer,
    auth: authReducer
})


// Tạo một redux store
export const store = configureStore({
    reducer: {
        count: countReducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(logMiddleware),
    devTools: ENV === 'development'
})


// Lắng nghe sự thay đổi của state, thực hiện callback khi state có thay đổi
// store.subscribe(() => {
//     console.log(1, store.getState())
// })


// Mỗi 1s sẽ tăng count + 1
// setInterval(() => {
//     store.dispatch({ type: INCREMENT_ACTION })
// }, 1000)


// Mỗi 1s sẽ giãm count - 1.5
// setInterval(() => {
//     store.dispatch({ type: DECREMENT_ACTION, payload: 1.5 })
// }, 2500)
