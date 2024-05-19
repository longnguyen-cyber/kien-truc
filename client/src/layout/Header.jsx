import React, { useEffect, useState } from 'react'
import logoIUH from '../assets/image/logoIUH.png'
import { useNavigate } from 'react-router-dom'
import UserApi from '../api/user'
const Header = () => {
  const navigate = useNavigate()

  const registercourse = () => {
    navigate('/register-course')
  }
  const program = () => {
    navigate('/program')
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <span className="float-right">{user?.gender ? 'Nam' : 'Nữ'}</span>
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

        <div className="my-auto ml-4 text-blue-500 grid grid-cols-2 space-x-10">
          <div className="flex flex-col items-start">
            <button
              onClick={() => {
                navigate('/')
              }}
            >
              THÔNG TIN SINH VIÊN
            </button>
            <button onClick={registercourse}>ĐĂNG KÝ HỌC PHẦN</button>
            <button onClick={program}>CHƯƠNG TRÌNH KHUNG</button>
          </div>
          <div className="flex flex-col items-start">
            <button
              onClick={() => {
                navigate('/profile')
              }}
            >
              THÔNG TIN HỌC TẬP
            </button>
            <button
              onClick={() => {
                navigate('/schedule')
              }}
            >
              XEM LỊCH HỌC
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
