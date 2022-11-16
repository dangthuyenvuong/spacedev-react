import styled from "styled-components"
import { useState } from 'react'

const CountStyle = styled.div`
    width: 700px;
    height: 500px;
    background: red;
    color: white;
    font-size: 50px;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
`

const CountButtonStyle = styled.button`
    background: white;
    width: 100px;
    height: 100px;
    color: black;
`

/**
 * State
 * 
 * - Cách thức hoạt động
 * - re-render sau mỗi lần setState
 * - initialState là giá trị khởi tạo ban đầu
 * - initialState là 1 callback đc sử dụng khi logic tính toán initialState phức tạp
 * - setState là một giá trị mới
 * - setState là một callback
 * - Những lưu ý khi sử dụng hook
 */

const fibonaci = (n) => {
    if (n < 3) return n
    return fibonaci(n - 1) + fibonaci(n - 2)
}


export const Count = (props) => {
    
    const [count, setCount] = useState(() => {
        console.log('fibonaci')
        return fibonaci(props.count)
    })

    const [user, setUser] = useState({
        name: 'Dang Thuyen Vuong',
        age: 18
    })

    const onDecre = (ev) => {
        // console.log('onDecre', ev)
        setCount((preState) => {
            return preState - 10
        })
        setCount((preState) => preState - 1)
        setCount((preState) => preState - 1)
    }
    const onIncre = (ev) => {
        // console.log('onIncre', ev)
        setCount(count + 1)
    }

    const onSetUser = () => {
        user.birthday = '30/01/1994'
        setUser({...user})
    }

    console.log('re-render')
    return (
        <CountStyle>
            <CountButtonStyle onClick={onDecre}>-</CountButtonStyle>
            <div className="count">{count}</div>
            {/* <div>
                {JSON.stringify(user)}
            </div> */}

            {/* <CountButtonStyle onClick={onSetUser}>Click</CountButtonStyle> */}
            <CountButtonStyle id="demo" onClick={onIncre}>+</CountButtonStyle>
        </CountStyle>
    )
}