import React, { useEffect, useState } from 'react'
import logoIUH from '../assets/image/logoIUH.png'
import { useNavigate } from 'react-router-dom'
import UserApi from '../api/user'
const Header = () => {
  const navigate = useNavigate()
  const profile = () => {
    navigate('/profile')
  }
  const registercourse = () => {
    navigate('/register-course')
  }
  const schedule = () => {
    navigate('/schedule')
  }

  const logout = () => {
    UserApi.UserLogout().then((response) => {
      if (response.status === 200) {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('user')
        navigate('/login')
      }
    })
  }

  const [user, setUser] = useState()
  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    if (!token) {
      navigate('/login')
      return
    }

    const userLocal = JSON.parse(localStorage.getItem('user'))
    setUser(userLocal)
  }, [])

  return (
    <div className="w-3/4 mx-auto border">
      <img src={logoIUH} className="w-full object-cover" alt="logoIUH" />

      <div className="flex mt-2">
        <div className="bg-[#4eb0ff] w-56 text-white px-3">
          <p>Xin chào!</p>
          <strong>{user?.student_name}</strong>
          <p className="text-sm mb-1">
            Giới tính:{' '}
            <span className="float-right">
              {user?.gender === 1 ? 'Nam' : 'Nữ'}
            </span>
          </p>
          <p className="text-sm mb-1">
            MSSV: <span className="float-right">{user?.code}</span>
          </p>
          <p className="text-sm mb-1">
            Trạng thái:{' '}
            <span className="float-right">
              {user?.status === 'active' ? 'Đang học' : 'Nghỉ học'}
            </span>
          </p>

          <button
            className="bg-orange-500  hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-full text-center mx-auto mt-4 mb-2"
            onClick={logout}
          >
            Đăng xuất
          </button>
        </div>

        <div className="my-auto ml-4 text-blue-500">
          <button onClick={profile}>THÔNG TIN SINH VIÊN</button>
          <div>
            <button onClick={registercourse}>ĐĂNG KÝ HỌC PHẦN</button>
          </div>
          <div>
            <button onClick={schedule}>CHƯƠNG TRÌNH KHUNG</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
