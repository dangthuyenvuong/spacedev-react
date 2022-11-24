import React, { createContext, useContext, useState } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'

const Context = createContext({demo: 100})

export default function Demo() {

    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(100)

    return (
        <div style={{ padding: '100px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Context.Provider value={{ count: count1, setCount: setCount1, aaaaaaa: 1 }}>
                <Count />
            </Context.Provider>
            {/* <Context.Provider value={{ count: count2, setCount: setCount2, bbbb: 2 }}> */}
                <Count />
            {/* </Context.Provider> */}
        </div>
    )
}


const CountStyle = styled.div`
    border: 1px solid #ccc;
    padding: 40px;
    width: 500px;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 100px;
`


export const Count = () => {
    const state = useContext(Context)
    console.log(state)
    const { count, setCount } = state
    return (
        <CountStyle>
            <Button onClick={() => setCount(count - 10)}>-10</Button>
            {count}
            <Button onClick={() => setCount(count + 10)}>+10</Button>
        </CountStyle>
    )
}

/**
 * Context API
 * 1. Những component con, cháu, chắt,... trong Provider sẽ lấy các giá trị Provider thông qua useContext
 * 2. Trong trường hợp component không đặt trong 1 Provider đó, defaultValue khi tạo Context sẽ được return về
 */