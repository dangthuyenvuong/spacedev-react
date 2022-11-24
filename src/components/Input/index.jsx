import { ErrorText, InputStyle } from "./style"
import classNames from "classnames"

export const Input = ({ error, className, type = 'text', ...props }) => {
    return (
        <InputStyle className={classNames(className, { error })}>
            <input {...props} type={type} />
            {error && <ErrorText>{error}</ErrorText>}
        </InputStyle>
    )
}