import { useState } from "react"
import { validate } from "../utils/validate"

/**
 * 
 * @param {*} rules 
 * @return register, values, errors, validate
 */
export const useForm = (rules, initialValue = {}) => {
    const [values, setForm] = useState(initialValue)
    const [errors, setError] = useState({})

    const register = (name) => {
        return {
            error: errors[name],
            value: values[name] || '',
            onChange: (ev) => setForm({ ...values, [name]: ev.target.value })
        }
    }

    const _validate = () => {
        const errorObject = validate(rules, values)

        setError(errorObject)

        return Object.keys(errorObject).length === 0
    }

    return {
        values,
        errors,
        register,
        validate: _validate,
        setForm
    }
}