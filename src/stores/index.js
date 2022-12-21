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


/**
 * store: redux store dùng để quản lý global state
 * 
 * subscribe: Lắng nghe sự thay đổi của state, khi state thay đổi redux sẽ thực thi hàm callback
 * dispatch: Hàm trigger 1 event, input là 1 plan object theo quy định: 
 *      type: Tên của action
 *      payload: data nếu có
 * 
 * 1 store duy nhất, nhiều reducer, mỗi reducer chỉ quản lý những dữ liệu liên quan reducer đó
 * 
 * function reducer: 
 *  Mỗi reducer sẽ quản lý 1 phần dữ liệu của store
 *  Khi dispatch, tất cả reducer sẽ được kích hoạt
 *  reducer cần return về một giá trị, giá trị sẽ được cập nhật vào store. Trong trường hợp return về state cũ, redux sẽ không cần re-render lại
 *  State là plan object, không lưu function
 */