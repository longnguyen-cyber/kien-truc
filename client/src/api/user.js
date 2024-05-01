import axiosClient from './axiosClient'

const UserApi = {
    UserLogin: (data) => {
        const url = '/users/login'
        return axiosClient.post(url, data)
    },
    UserRegister: (data) => {
        const url = '/users/register'
        return axiosClient.post(url, data)
    },
    UserLogout: () => {
        const url = '/users/logout'
        return axiosClient.post(url)
    },
    GetProfile: () => {
        const url = '/users/me'
        return axiosClient.get(url)
    },
}
export default UserApi
