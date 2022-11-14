// src/components/Box/index.jsx

export function Box(props){
    console.log(props)
    return [
        <div
            key={1}
            className="box"
            style={{
                background: props.background,
                color: 'white',
                width: 400,
                height: 400,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 50
            }}
        >
            {props.text}
        </div>,
        <div key={2}>ABC</div>
    ]
}