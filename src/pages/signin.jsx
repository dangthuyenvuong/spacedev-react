import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { PATH } from '../config/path'


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

export default function Signin({ login }) {
    console.log('Signin re-render')
    const navigate = useNavigate()
    const _onLogin = () => {
        login()
        navigate(PATH.profile.index)
    }


    return (
        <main className="auth" id="main">
            <div className="wrap">
                {/* login-form */}
                <div className="ct_login" >
                    <h2 className="title">Đăng nhập</h2>
                    <input type="text" placeholder="Email / Số điện thoại" />
                    <input type="password" placeholder="Mật khẩu" />
                    <div className="remember">
                        <label className="btn-remember">
                            <div>
                                <input type="checkbox" />
                            </div>
                            <p>Nhớ mật khẩu</p>
                        </label>
                        <a href="#" className="forget">Quên mật khẩu?</a>
                    </div>
                    <button onClick={_onLogin} className="btn rect main btn-login">đăng nhập</button>
                    <div className="text-register" style={{}}>
                        <span>Nếu bạn chưa có tài khoản?</span> <a className="link" href="#">Đăng ký</a>
                    </div>
                </div>
            </div>
        </main>
    )
}
