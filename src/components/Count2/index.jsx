import { useEffect, useReducer } from "react"
import Button from "../Button"
import { DECREMENT_ACTION, INCREMENT_ACTION } from "./action"
import { reducer } from "./reducer"

export const Count2 = () => {

    const [count, dispatch] = useReducer(reducer, 0, () => 100)
    useEffect(() => {
        setInterval(() => {
            dispatch({ type: INCREMENT_ACTION })
        }, 1000)
    }, [])

    return (
        <main className="register-course">
            <section className="section-1 wrap container">
                {/* <div class="main-sub-title">liên hệ</div> */}
                <Button onClick={() => dispatch({ type: DECREMENT_ACTION })}>-1</Button>
                Count: {count} <br />
                <Button onClick={() => dispatch({ type: INCREMENT_ACTION })}>+1</Button>
                <Button onClick={() => dispatch({ type: INCREMENT_ACTION, payload: 10 })}>+1</Button>
            </section>
        </main>
    )
}