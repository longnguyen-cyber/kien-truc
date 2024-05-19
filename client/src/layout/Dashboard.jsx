/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import UserApi from '../api/user'
const Dashboard = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState()
  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    if (!token) {
      navigate('/login')
      return
    }
    const dataFectch = async () => {
      // Call API to get profile
      const response = await UserApi.GetProfile()
      if (response.status === 200) {
        const userResponse = response.data
        setUser(userResponse)
        setUser(response.data)
      } else {
        navigate('/login')
      }
    }

    dataFectch()
  }, [])
  return (
    <div>
      <Header />
      <div className="w-3/4 mx-auto ">
        <div className="border my-6 p-3 border-l-[3px] border-l-blue-600">
          <p className="text-blue-500 text-center font-bold text-xl mt-2 mb-6">
            THÔNG TIN SINH VIÊN
          </p>
          <div className="grid grid-cols-2 mx-6">
            <div>
              <p>
                Khóa: <strong>{user?.education.course}</strong>
              </p>
              <p>
                Bậc đào tạo: <strong>{user?.education.training_level}</strong>
              </p>
              <p>
                Ngành: <strong>{user?.education.sector}</strong>
              </p>
              <p>
                Khoa: <strong>{user?.education.faculty}</strong>
              </p>
            </div>
            <div>
              <p>
                Lớp: <strong>{user?.education.identifier_class}</strong>
              </p>
              <p>
                Loại hình đào tạo:{' '}
                <strong>{user?.education.training_type}</strong>
              </p>
              <p>
                Chuyên ngành: <strong>{user?.education.major}</strong>
              </p>
              <p>
                Cơ sở: <strong>{user?.education.facility}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <br />
    </div>
  )
}

export default Dashboard
