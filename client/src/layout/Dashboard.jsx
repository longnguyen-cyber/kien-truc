import React, { useEffect, useState } from 'react'
import logoIUH from '../assets/image/logoIUH.png'
import { useNavigate } from 'react-router-dom'
import UserApi from '../api/user'
const Dashboard = () => {


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
  const login = () => {
    navigate('/login')
  }

  const [user, setUser] = useState()
  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    if (!token) {
      // navigate('/login')
      return
    }
    const dataProfile = async () => {
      // Call API to get profile
      const response = await UserApi.GetProfile()
      if (response.status === 200) {
        const userResponse = response.data.user
        console.log(userResponse)
        setUser(userResponse)
      }
    }

    dataProfile()
  }
    , [])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '15%',
          width: '76%',
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <img
          src={logoIUH}
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
            //objectFit: 'contain'
          }}
          alt="logoIUH"
        />
      </div>
      <div
        style={{
          display: 'flex',
          height: '180px',
          width: '76%',
          border: '1px solid #e7dfdf',
          marginTop: '30px',
          borderRadius: '5px',
          flexDirection: 'row'
        }}
      >
        <div
          style={{
            display: 'flex',
            height: '100%',
            width: '20%',
            border: '1px solid #a59a9a',
            backgroundColor: '#4681ff',
            flexDirection: 'column'
          }}
        >
          <label
            style={{
              marginTop: '10px',
              marginLeft: '10px',
              fontSize: '13px',
              color: 'white'
            }}
          >
            Xin chào!
          </label>
          <label
            style={{
              marginTop: '10px',
              marginLeft: '10px',
              fontSize: '16px',
              color: 'white',
              fontWeight: 'bold'
            }}
          >
            {user?.student_name || 'Tên sinh viên'}
          </label>
          <label
            style={{
              marginTop: '10px',
              marginLeft: '10px',
              fontSize: '13px',
              color: 'white'
            }}
          >
            Giới tính: {user.gender === 1 ? 'Nam' : 'Nữ'}
          </label>
          <label
            style={{
              marginTop: '10px',
              marginLeft: '10px',
              fontSize: '13px',
              color: 'white'
            }}
          >
            MSSV: {user.code || 'MSSV'}
          </label>
          <label
            style={{
              marginTop: '10px',
              marginLeft: '10px',
              fontSize: '13px',
              color: 'white'
            }}
          >
            Trạng thái: {user.status === "active" ? 'Đang học' : 'Nghỉ học'}
          </label>
          <button
            style={{
              marginTop: '10px',
              height: '35px',
              width: '90%',
              backgroundColor: '#fa763a',
              color: 'white',
              fontSize: '14px',
              fontWeight: 'bold',
              border: 'none',
              marginLeft: '10px'
            }}
            onClick={login}
          >
            Đăng xuất
          </button>
        </div>
        <div
          style={{
            display: 'flex',
            height: '90%',
            marginLeft: '30px',
            width: '12%',
            marginTop: '10px',
            border: '1px solid #a59a9a',
            flexDirection: 'column'
          }}
        >
          <img
            src={logoIUH}
            style={{ width: '100%', height: '100%' }}
            alt="logoIUH"
          />
        </div>
        <div
          style={{
            display: 'flex',
            height: '90%',
            marginLeft: '70px',
            width: '40%',

            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <div
            style={{
              display: 'flex',
              marginTop: '10px'
            }}
          >
            <label
              style={{
                fontSize: '15px',
                color: 'blue'
              }}
              onClick={profile}
            >
              THÔNG TIN SINH VIÊN
            </label>
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: '10px'
            }}
          >
            <label
              style={{
                fontSize: '15px',
                color: 'blue'
              }}
              onClick={registercourse}
            >
              ĐĂNG KÝ HỌC PHẦN
            </label>
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: '10px'
            }}
          >
            <label
              style={{
                fontSize: '15px',
                color: 'blue'
              }}
              onClick={schedule}
            >
              CHƯƠNG TRÌNH KHUNG
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard