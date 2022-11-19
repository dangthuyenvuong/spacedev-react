import { Navigate, Outlet } from "react-router-dom"

export const AuthRoute = ({ redirect = '/', user, children }) => {
    if (user) return <Navigate to={redirect}/>

    return <Outlet />
}