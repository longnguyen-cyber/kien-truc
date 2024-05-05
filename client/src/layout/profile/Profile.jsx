import React, { useEffect, useState } from 'react'
import Dashboard from '../Dashboard'
import UserApi from '../../api/user'

import { useNavigate } from 'react-router-dom'
const Profile = () => {
  const navigate = useNavigate()

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
        setUser(userResponse)
        setUser(response.data)
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
      <Dashboard />
      <div
        style={{
          display: 'flex',
          height: '180px',
          width: '76%',
          border: '1px solid #e7dfdf',
          marginTop: '20px',
          borderRadius: '5px',
          flexDirection: 'column'
        }}
      >
        <div
          style={{
            display: 'flex',
            height: '20%',
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <label
            style={{
              fontSize: '18px',
              marginTop: '10px',
              color: 'blue',
              fontWeight: 'bold'
            }}
          >
            THÔNG TIN SINH VIÊN
          </label>
        </div>
        <div
          style={{
            display: 'flex',
            height: '80%',
            width: '100%',
            flexDirection: 'row'
          }}
        >
          <div
            style={{
              display: 'flex',
              height: '100%',
              width: '50%',
              marginTop: '10px',
              flexDirection: 'column'
            }}
          >
            <label
              style={{
                fontSize: '14px',
                marginTop: '15px',
                marginLeft: '20px',
                color: 'black'
              }}
            >
              Khóa:
            </label>
            <label
              style={{
                fontSize: '14px',
                marginTop: '5px',
                marginLeft: '20px',
                color: 'black'
              }}
            >
              Bậc đào tạo:
            </label>
            <label
              style={{
                fontSize: '14px',
                marginTop: '5px',
                marginLeft: '20px',
                color: 'black'
              }}
            >
              Ngành:
            </label>
            <label
              style={{
                fontSize: '14px',
                marginTop: '5px',
                marginLeft: '20px',
                color: 'black'
              }}
            >
              Khoa:
            </label>
          </div>
          <div
            style={{
              display: 'flex',
              height: '100%',
              width: '50%',
              marginTop: '10px',
              flexDirection: 'column'
            }}
          >
            <label
              style={{
                fontSize: '14px',
                marginTop: '15px',
                marginLeft: '10px',
                color: 'black'
              }}
            >
              Lớp:
            </label>
            <label
              style={{
                fontSize: '14px',
                marginTop: '5px',
                marginLeft: '10px',
                color: 'black'
              }}
            >
              Loại hình đào tạo:
            </label>
            <label
              style={{
                fontSize: '14px',
                marginTop: '5px',
                marginLeft: '10px',
                color: 'black'
              }}
            >
              Chuyên ngành:
            </label>
            <label
              style={{
                fontSize: '14px',
                marginTop: '5px',
                marginLeft: '10px',
                color: 'black'
              }}
            >
              Cơ sở:
            </label>
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          height: '20%',
          width: '76%',
          justifyContent: 'center',
          flexDirection: 'row',
          marginTop: '20px',
          backgroundColor: '#3e69f6'
        }}
      >
        <div
          style={{
            height: '70%',
            width: '100%',
            marginTop: '10px',
            marginLeft: '10px'
          }}
        >
          <label
            style={{
              fontSize: '15px',
              color: 'white'
            }}
          >
            TRƯỜNG ĐẠI HỌC CÔNG NGHIỆP TP.HỒ CHÍ MINH <br></br>Địa chỉ : Số 12
            Nguyễn Văn Bảo, Phường 4, Quận Gò Vấp, TP. Hồ Chí Minh <br></br>
            Điện thoại: 0283 8940 390<br></br> Fax: 0283 9940 954 <br></br>
            Email: dhcn@iuh.edu.vn
          </label>
        </div>
        <div
          style={{
            height: '30%',
            width: '70%',
            display: 'flex',
            justifyContent: 'right',
            marginTop: '10px',
            marginRight: '30px'
          }}
        >
          <label
            style={{
              fontSize: '15px',
              color: 'white'
            }}
          >
            Thong ke truy cap
          </label>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          height: '6%',
          width: '76%',
          justifyContent: 'center',
          flexDirection: 'row',
          backgroundColor: 'lightblue'
        }}
      >
        <label
          style={{
            marginTop: '15px',
            fontSize: '12px',
            color: 'white'
          }}
        >
          Bản quyền 2024 - Trường Đại học Công nghiệp TP. Hồ Chí Minh
        </label>
      </div>
    </div>
  )
}

export default Profile
