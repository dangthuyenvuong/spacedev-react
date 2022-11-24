import { api, USER_API } from "../config/api"

export const userSerivce = {
    signup(data) {
        return api.post(`${USER_API}/register`, data)
    }
}