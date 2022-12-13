import { api, USER_API } from "../config/api"

export const userService = {
    getProfile() {
        return api.get(`${USER_API}`)
    },
    signup(data) {
        return api.post(`${USER_API}/register`, data)
    },
    resendEmail(data) {
        return api.post(`${USER_API}/resend-email`, data)
    },
    updateInfo(data) {
        return api.patch(`${USER_API}`, data)
    },
}