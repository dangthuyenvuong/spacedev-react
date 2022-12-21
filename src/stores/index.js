import { createStore, combineReducers } from 'redux'
import { countReducer } from './countReducer'
import { authReducer } from './authReducer'


// Gôm nhiều reducer lại thành 1, mỗi reducer phân biệt với nhau bởi tên của reducer
const reducers = combineReducers({
    count: countReducer,
    auth: authReducer
})

// Tạo một redux store
export const store = createStore(reducers)


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
