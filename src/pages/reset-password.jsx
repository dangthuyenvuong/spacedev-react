import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { useAsync } from '../hooks/useAsync'
import { useForm } from '../hooks/useForm'
import { userService } from '../services/user.service'
import { handleError } from '../utils/handleError'
import { confirm, required } from '../utils/validate'
import { message } from 'antd'

export default function ResetPassword() {
    const [search, setSearch] = useSearchParams()
    const code = search.get('code')
    const { loading: sendEmailLoading, excute: sendEmailService } = useAsync(userService.sendEmailResetPassword)
    const { loading: resetPasswordLoading, excute: resetPasswordService } = useAsync(userService.resetPasswordByCode)


    const sendEmailForm = useForm({
        username: [required()]
    })
    const resetPasswordForm = useForm({
        password: [
            required()
        ],
        confirmPassword: [
            confirm('password')
        ]
    })
    const onSendEmail = async () => {
        try {
            if (sendEmailForm.validate()) {
                const res = await sendEmailService(sendEmailForm.values)
                message.success(res.message)
            }
        } catch (err) {
            handleError(err)
        }
    }
    const onResetPassword = async () => {

        try {
            if (resetPasswordForm.validate()) {
                const res = await resetPasswordService({
                    password: resetPasswordForm.values.password,
                    code
                })
                message.success('Thay đổi mật khẩu thành công')
            }
        } catch (err) {
            handleError(err)
        }
    }

    return (
        <main className="auth" id="main">
            {
                code ? (
                    <div className="wrap">
                        <h2 className="title">Đặt lại mật khẩu</h2>
                        <Input className="mb-5" placeholder="Mật khẩu" type="password" {...resetPasswordForm.register('password')} />
                        <Input className="mb-5" placeholder="Nhập lại mật khẩu" type="password" {...resetPasswordForm.register('confirmPassword')} />
                        <Button loading={resetPasswordLoading} onClick={onResetPassword}>Đặt lại mật khẩu</Button>
                    </div>
                ) : (
                    <div className="wrap">
                        <h2 className="title">Đặt lại mật khẩu</h2>
                        <Input className="mb-5" placeholder="Email" {...sendEmailForm.register('username')} />
                        <Button loading={sendEmailLoading} onClick={onSendEmail}>Đặt lại mật khẩu</Button>
                    </div>
                )
            }
        </main>
    )
}
