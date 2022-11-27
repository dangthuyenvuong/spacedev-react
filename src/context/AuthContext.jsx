import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext({})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        return JSON.parse(localStorage.getItem('user'))
    })
    const login = () => {
        setUser({
            name: 'Dang Thuyen Vuong',
            avatar: '/img/avt.png'
        })
    }
    const logout = () => {
        setUser()
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user || null))
    }, [user])

    return (
        <Context.Provider value={{ user, login, logout }}>{children}</Context.Provider>
    )
}

export const useAuth = () => useContext(Context)