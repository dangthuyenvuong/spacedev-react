import { memo } from 'react';
import { ButtonStyle } from './style'
import { LoadingOutlined } from '@ant-design/icons';


export const Button = memo(({ loading, children, ...props }) => {
    return (
        <ButtonStyle {...props} disabled={loading} className={`btn main rect gap-3 ${props.className ?? ''}`} >
            {loading && <LoadingOutlined style={{ fontSize: 20 }} />}
            {children}
        </ButtonStyle>
    )
})


export default Button