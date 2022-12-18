import { Input } from '@/components/Input'
import { useMemo } from 'react'
import { useDeferredValue } from 'react'
import { useState, useTransition } from 'react'

export const DemoReact = () => {
    // const [value, setValue] = useDebounce('')
    // useEffect(() => {
    //     console.log('callApi', value)
    // }, [value])

    const [value, setValue] = useState('')

    return (
        <main className="auth">
            <div className="wrap">
                {/* login-form */}
                <div className="ct_login" >
                    <h2 className="title">Search</h2>

                    <div className="flex">
                        <Input onChange={ev => setValue(ev.target.value)} placeholder="Search...." />
                    </div>

                    <List value={value} />
                </div>
            </div>
        </main>
    )
}




const List = ({ value }) => {
    const _value = useDeferredValue(value)


    const list = useMemo(() => {
        if(_value) {
            const list = []
            for (let i = 0; i < 10000; i++) {
                list.push(<div key={i}>{_value}</div>)
            }
            return list
        }
    }, [_value])
    console.log(_value)

    return list
}