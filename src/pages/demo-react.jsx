import { Input } from "@/components/Input"
import { useDebounce } from "@/hooks/useDebounce"
import { useEffect } from "react"

export const DemoReact = () => {
    const [value, setValue] = useDebounce('', 1000)
    useEffect(() => {
        console.log('callAPI', value)
    }, [value])
    return (
        <main className="auth">
            <div className="wrap">
                {/* login-form */}
                <div className="ct_login" >
                    <h2 className="title">Search</h2>
                    {/* <input type="text" placeholder="Email / Số điện thoại" />
                    <input type="password" placeholder="Mật khẩu" /> */}
                    <Input onChange={ev => setValue(ev.target.value)} className="mb-5" placeholder="Searching...." />
                </div>
            </div>
        </main>
    )
}

