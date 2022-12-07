import { ErrorText, InputStyle } from "./style"
import classNames from "classnames"
import { forwardRef } from "react"

export const Input = forwardRef(({ error, className, type = 'text', ...props }, ref) => {
    return (
        <InputStyle className={classNames(className, { error })}>
            <input {...props} type={type} ref={ref}/>
            {error && <ErrorText>{error}</ErrorText>}
        </InputStyle>
    )
})