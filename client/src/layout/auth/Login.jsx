import React from 'react'

import axios from 'axios'
import logoIUH from '../../image/logoIUH.png'
const Login = () => {
  //this token will be set in the application's local storage with the purpose of use for all API when the user login success
  // token will get in axiosClient.js
  const setTokenToLocalStorage = (token) => {
    localStorage.setItem('tokenUser', JSON.stringify(token))
  }
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
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
          display: 1,
          height: '220px',
          width: '400px',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '10px',

          border: '1px solid #000',

          marginTop: '30px'
        }}
      >
        <div>hello</div>
      </div>
      <div
        style={{
          display: 'flex',
          height: '20%',
          width: '80%',
          justifyContent: 'center',

          flexDirection: 'row',
          marginTop: '40px',
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
            Nguyễn Văn Bảo, Phường 4, Quận Gò Vấp, TP. Hồ Chí Minh <br></br>Điện
            thoại: 0283 8940 390<br></br> Fax: 0283 9940 954 <br></br>Email:
            dhcn@iuh.edu.vn
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
          width: '80%',
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

export default Login
