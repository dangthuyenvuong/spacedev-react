import { Navigate, Outlet } from "react-router-dom"

export const PrivateRoute = ({ redirect = '/', user }) => {
    if (!user) return <Navigate to={redirect}/>

    return <Outlet />
}