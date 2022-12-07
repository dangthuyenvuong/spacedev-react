import { message } from "antd";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "../config/path";
import { authService } from '../services/auth.service';
import { userService } from "../services/user.service";
import { clearToken, clearUser, getUser, setToken, setUser } from "../utils/token";
const Context = createContext({})

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const [user, _setUser] = useState(getUser)
    const login = async (data) => {
        try {
            const res = await authService.login(data)
            if (res.data) {
                setToken(res.data)
                const user = await userService.getProfile()
                _setUser(user.data)
                setUser(user.data)
                message.success('Đăng nhập tài khoản thành công')
                navigate(PATH.profile.index)
            }
        } catch (err) {
            console.error(err);
            if (err?.response?.data?.message) {
                message.error(err.response.data.message)
            }
        }
    }
    const logout = () => {
        clearUser()
        clearToken()
        _setUser()
        message.success('Đăng xuất tài khoản thành công')
    }

    return (
        <Context.Provider value={{ user, login, logout }}>{children}</Context.Provider>
    )
}

export const useAuth = () => useContext(Context)