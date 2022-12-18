import { DECREMENT_ACTION, INCREMENT_ACTION } from "./action"


export const reducer = (state, action) => {
    console.log('reducer', state, action)
    switch (action.type) {
        case INCREMENT_ACTION:
            return state + (action.payload || 1)
        case DECREMENT_ACTION:
            return state - 1
        default:
            console.error('Invalid Action')
            return state

    }
}
