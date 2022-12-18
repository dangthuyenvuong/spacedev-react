import { Input } from '@/components/Input'
import { useState, useTransition } from 'react'

export const DemoReact = () => {
    // const [value, setValue] = useDebounce('')
    // useEffect(() => {
    //     console.log('callApi', value)
    // }, [value])

    const [value, setValue] = useState('')
    const [isPending, startTransition] = useTransition()


    let list = []
    for (let i = 0; i < 10000; i++) {
        list.push(<div key={i}>{value}</div>)
    }

    return (
        <main className="auth">
            <div className="wrap">
                {/* login-form */}
                <div className="ct_login" >
                    <h2 className="title">Search</h2>

                    <div className="flex">
                        <Input onChange={ev => {
                            startTransition(() => {
                                setValue(ev.target.value)
                            })
                        }} placeholder="Search...." />

                    </div>
                    <div>
                        {isPending && <div>Rendering.....</div>}
                    </div>
                    {list}
                </div>
            </div>
        </main>
    )
}

