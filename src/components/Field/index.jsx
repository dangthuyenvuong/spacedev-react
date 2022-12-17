import React from 'react'
import styled from 'styled-components'

const ErrorP = styled.span`
    color: red;
    position: absolute;
    top: 100%;
    left: 230px;
    font-size: 0.875rem;
    font-style: italic;
`

export const Field = React.memo(({ label, error, required, type = 'text', renderInput, ...rest }) => {
    console.log('render', rest.value)
    return (
        <label className='relative'>
            <p>{label}{required && <span>*</span>}</p>
            {
                renderInput ? renderInput?.(rest) : <input type={type} {...rest} />
            }
            {error && <ErrorP>{error}</ErrorP>}
        </label>
    )
}, (prevProps, nextProps) => {
    return prevProps.value === nextProps.value && prevProps.error === nextProps.error
}) 

export default Field