import React from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import { Input } from '../components/Input'
import { PATH } from '../config/path'
import { useAuth } from '../context/AuthContext'
import { useForm } from '../hooks/useForm'
import { minMax, regexp, required } from '../utils/validate'
import { useAsync } from '../hooks/useAsync'
import { authService } from '../services/auth.service'
import { message } from 'antd'
import { setToken, setUser } from '../utils/token'
import { useDispatch } from 'react-redux'
import { SET_USER_ACTION } from '@/stores/action'
import { userService } from '@/services/user.service'
import { handleError } from '@/utils/handleError'
import { useCallback } from 'react'
import { loginAction, loginThunkAction } from '@/stores/authReducer'
import { unwrapResult } from '@reduxjs/toolkit'


/**
 * Navigate là component, khi Navigate được render, page sẽ được redirect sang page khác dựa theo Navigate
 * Thường dùng để bảo vệ 1 router khi người dùng chưa được phép (bảo vệ link account)
 * 
 * useNavigate là 1 hook return về navigate method, sử dụng useNavigate khi bạn muốn
 * chuyển tới 1 url trong một action nào đó
 * Thường dùng để chuyển link khi thực hiện xong 1 action (Login thành công)
 * 
 * PublicRoute: anyone can access
 * PrivateRoute: login user can access
 * AuthRoute: has not logged in yet
 */

export default function Signin() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { state } = useLocation()

    const login = useCallback(async (data) => {
        try {
            const user = await dispatch(loginThunkAction(data)).unwrap()
            console.log('login', user)
            message.success(`Chào mừng ${user.name} đã quay trở lại`)
        }catch(err) {
            handleError(err)
        }

        // return new Promise((resolve) => {
        //     const res = dispatch(loginAction({
        //         form: data,
        //         success: (user) => {
        //             message.success('Đăng nhập tài khoản thành công')
        //             if (state?.redirect) {
        //                 navigate(state.redirect)
        //             }
        //         },
        //         error: (err) => {
        //             handleError(err)
        //         },
        //         finally: () => {
        //             resolve()
        //         }
        //     }))

        //     console.log('login', res)
        // })
        // try {
        //     const res = await authService.login(data)
        //     setToken(res.data)
        //     const user = await userService.getProfile()
        //     setUser(user.data)
        //     dispatch(setUserAction(user.data))
        //     message.success('Đăng nhập tài khoản thành công')
        //     if(state?.redirect) {
        //         navigate(state.redirect)
        //     }
        // } catch (err) {
        //     handleError(err)
        // }
    }, [])
    // const { login, } = useAuth()
    const { excute: loginService, loading } = useAsync(login)
    const form = useForm({
        username: [
            required('Vui lòng điền tài khoản'),
            regexp('email', 'Xin vui lòng điền đúng định dạng Email')
        ],
        password: [
            required('Xin vui lòng điền mật khẩu'),
            minMax(6, 32)
        ]
    })
    const _onLogin = async () => {
        if (form.validate()) {
            loginService(form.values)
        }

    }



    return (
        <main className="auth">
            <div className="wrap">
                {/* login-form */}
                <div className="ct_login" >
                    <h2 className="title">Đăng nhập</h2>
                    {/* <input type="text" placeholder="Email / Số điện thoại" />
                    <input type="password" placeholder="Mật khẩu" /> */}
                    <Input {...form.register('username')} className="mb-5" placeholder="Tải khoản" />
                    <Input {...form.register('password')} className="mb-5" type="password" placeholder="Mật khẩu" />
                    <div className="remember">
                        <label className="btn-remember">
                            <div>
                                <input type="checkbox" />
                            </div>
                            <p>Nhớ mật khẩu</p>
                        </label>
                        <Link to={PATH.resetPassword} className="forget">Quên mật khẩu?</Link>
                    </div>
                    <Button loading={loading} onClick={_onLogin} className="btn rect main btn-login">đăng nhập</Button>
                    <div className="text-register" style={{}}>
                        <span>Nếu bạn chưa có tài khoản?</span> <Link className="link" to={PATH.signup}>Đăng ký</Link>
                    </div>
                </div>
            </div>
        </main>
    )
}


