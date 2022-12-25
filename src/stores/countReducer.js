import { DECREMENT_ACTION, INCREMENT_ACTION } from "./action";

export const countReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT_ACTION:
            return state + (action.payload || 1)
        case DECREMENT_ACTION:
            return state - (action.payload || 1)
        default:
            return state
    }
}
