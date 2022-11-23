import React from 'react'
import { SkeletonStyle } from './style'

export default function Skeleton({ shap = 'rectangle', width, height, children, ...props }) {
    return (
        <SkeletonStyle className={shap} style={{ width, height }} {...props}>{children}</SkeletonStyle>
    )
}
