import { createStore, combineReducers, applyMiddleware } from 'redux'
import { countReducer } from './countReducer'
import { authReducer } from './authReducer'



const logMiddleware = store => next => action => {
    console.log('logMiddleware', store.getState(), action)
    next(action)
}

// Gôm nhiều reducer lại thành 1, mỗi reducer phân biệt với nhau bởi tên của reducer
const reducers = combineReducers({
    count: countReducer,
    auth: authReducer
})

// Tạo một redux store
export const store = createStore(reducers, applyMiddleware(logMiddleware))


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


/**
 * store: redux store dùng để quản lý global state
 * 
 * subscribe: Lắng nghe sự thay đổi của state, khi state thay đổi redux sẽ thực thi hàm callback
 * dispatch: Hàm trigger 1 event, input là 1 plan object theo quy định: 
 *      type: Tên của action
 *      payload: data nếu có
 * 
 * 1 store duy nhất, nhiều reducer, mỗi reducer chỉ quản lý những dữ liệu liên quan reducer đó
 */