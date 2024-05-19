/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserApi from '../../api/user'
import logoIUH from '../../assets/image/logoIUH.png'
import Footer from '../Footer'
const Login = () => {
  //this token will be set in the application's local storage with the purpose of use for all API when the user login success
  // token will get in axiosClient.js
  const setTokenToLocalStorage = (token) => {
    localStorage.setItem('accessToken', JSON.stringify(token))
  }

  const [code, setCode] = useState('')
  const [password, setPassword] = useState('')

  const handleOnChange = (e) => {
    const { name, value } = e.target
    if (name === 'code') {
      setCode(value)
    } else if (name === 'password') {
      setPassword(value)
    }
  }

  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      navigate('/')
      return
    }
  }, [])

  const login = async () => {
    // Thực hiện chuyển hướng khi người dùng nhấp vào biểu tượng
    // navigate('/profile')
    const data = {
      code: code,
      password: password,
    }

    const response = await UserApi.UserLogin(data)
    if (response.status === 200) {
      const userLocal = {
        student_name: response.data.student_name,
        code: response.data.code,
        status: response.data.status,
        gender: response.data.gender,
        total_credits: response.data.total_credits,
      }
      setTokenToLocalStorage(response.data.token)
      localStorage.setItem('user', JSON.stringify(userLocal))
      navigate('/')
    }
  }
  return (
    <div>
      <div className="w-3/4 mx-auto">
        <img src={logoIUH} className="w-full object-cover" alt="logoIUH" />

        <div className="border rounded-md flex justify-center p-4 mt-6 flex-col items-center w-[29rem] mx-auto">
          <div className="border h-8 flex w-full">
            <label htmlFor="code" className="bg-gray-200 py-1 w-40">
              Mã sinh viên
            </label>
            <input
              type="text"
              placeholder="Nhập mã sinh viên"
              name="code"
              className="pl-3 w-full "
              value={code}
              onChange={handleOnChange}
            />
          </div>
          <br />
          <div className="border h-8 flex w-full">
            <label htmlFor="password" className="bg-gray-200 py-1 w-40">
              Mật khẩu
            </label>
            <input
              type="password"
              placeholder="Nhập mật khẩu"
              name="password"
              className="pl-3 w-full"
              value={password}
              onChange={handleOnChange}
            />
          </div>
          <button
            onClick={login}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mx-auto mt-4"
          >
            Đắng nhập
          </button>
        </div>
        <br />
      </div>
      <Footer />
    </div>
  )
}

export default Login
