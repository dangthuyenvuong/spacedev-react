import Button from '@/components/Button'
import Field from '@/components/Field'
import { useAuth } from '@/context/AuthContext'
import { useAsync } from '@/hooks/useAsync'
import { useForm } from '@/hooks/useForm'
import { userService } from '@/services/user.service'
import { handleError } from '@/utils/handleError'
import { regexp, required } from '@/utils/validate'
import { message } from 'antd'
import React from 'react'
export default function Profile() {

    const { user, setUser } = useAuth()
    const { loading, excute: updateProfileService } = useAsync(userService.updateProfile)

    const { register, values, validate } = useForm({
        name: [
            required()
        ],
        phone: [
            required(),
            regexp('phone')
        ],
        fb: [
            required(),
            regexp('url')
        ]
    }, user)
    const onSubmit = async () => {
        try {
            if (validate()) {
                const res = await updateProfileService(values)
                setUser(res.data)
                message.success('Bạn đã cập nhật thông tin tài khoản thành công')
            }

        } catch (err) {
            handleError(err)
        }
    }

    return (
        <div className="tab1">
            <Field label="Họ và tên" requried placeholder="Nguyễn Văn A" {...register('name')} />
            <Field label="Số điện thoại" required placeholder="0949******" {...register('phone')} />
            <Field label="Email" disabled  {...register('username')} />
            <Field label="Facebook" placeholder="Facebook url" {...register('fb')} />
            <Button loading={loading} onClick={onSubmit}>LƯU LẠI</Button>
        </div>
    )
}
