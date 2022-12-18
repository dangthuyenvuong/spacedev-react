import { ErrorText, InputStyle } from "./style"
import classNames from "classnames"
import { forwardRef, useImperativeHandle, useRef } from "react"
import { memo } from "react"

export const Input = memo(forwardRef(({ error, className, type = 'text', ...props }, ref) => {
    const inputRef = useRef()
    useImperativeHandle(ref, () => {
        return {
            setValue: (value) => {
                inputRef.current.value = value 
            }
        }
    }, [])

    return (
        <InputStyle className={classNames(className, { error })}>
            <input ref={inputRef} {...props} type={type} />
            {error && <ErrorText>{error}</ErrorText>}
        </InputStyle>
    )
}), (prevProps, nextProps) => {
    return prevProps.value === nextProps.value && prevProps.error === nextProps.error
})