import styled from "styled-components"

const CountStyle = styled.div`
    width: 500px;
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

export const Count = () => {
    const onDecre = (ev) => {
        console.log('onDecre', ev)
    }
    const onIncre = (ev) => {
        console.log('onDecre', ev)
    }

    return (
        <CountStyle>
            <CountButtonStyle onClick={onDecre}>-</CountButtonStyle>
            <div className="count">0</div>
            <CountButtonStyle onClick={onIncre}>+</CountButtonStyle>
        </CountStyle>
    )
}