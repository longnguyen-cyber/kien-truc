import React from 'react'

const Login = () => {
    //this token will be set in the application's local storage with the purpose of use for all API when the user login success
    // token will get in axiosClient.js
    const setTokenToLocalStorage = (token) => {
        localStorage.setItem('tokenUser', JSON.stringify(token))
    }
    return <div>Login</div>
}

export default Login
