import React from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons';
import { ButtonStyle } from './style';


export default function Button({ loading, children }) {

    return (
        <ButtonStyle className="btn main rect flex gap-1" disabled={loading}>
            {loading && <LoadingOutlined style={{ fontSize: 20 }} />}
            {children}
        </ButtonStyle>
    )
}
