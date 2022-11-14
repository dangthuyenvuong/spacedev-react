import {Fragment} from 'react'

export function Box(){
    return <>
        <div
            className="box"
            style={{
                background: 'red',
                color: 'white',
                width: 400,
                height: 400,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 50
            }}
        >
            Box
        </div>
        <div>ABC</div>
    </>
}
// jsx -> javascript xml
export const A = 1

export default Box

