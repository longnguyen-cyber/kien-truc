import React from 'react'

import axios from 'axios'
import logoIUH from '../../assets/image/logoIUH.png'
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
          display: 'flex',
          height: '250px',
          width: '450px',
          justifyContent: 'center',
          alignItems: 'center',
          border: '1px solid #e7dfdf',
          marginTop: '30px',
          borderRadius: '5px',
          flexDirection: 'column'
        }}
      >
        <div
          style={{
            display: 'flex',
            height: '14%',
            width: '90%',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid #a59a9a',
            marginTop: '10px'
          }}
        >
          <div
            style={{
              display: 'flex',
              height: '100%',
              width: '40%',
              alignItems: 'center',
              backgroundColor: '#eceff5'
            }}
          >
            <label
              style={{
                fontSize: '15px',
                color: 'black',
                marginLeft: '10px'
              }}
            >
              Mã sinh viên
            </label>
          </div>
          <div
            style={{
              display: 'flex',
              height: '100%',
              width: '60%',
              justifyContent: 'center',
              alignItems: 'center',
              borderLeft: '1px solid #a59a9a'
            }}
          >
            <input
              type="text"
              placeholder="Nhập mã sinh viên"
              style={{
                height: '89%',
                width: '100%',
                fontSize: '15px',
                border: 'none'
              }}
            ></input>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            height: '14%',
            width: '90%',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid #a59a9a',
            marginTop: '15px'
          }}
        >
          <div
            style={{
              display: 'flex',
              height: '100%',
              width: '40%',
              alignItems: 'center',
              backgroundColor: '#e6e9f0'
            }}
          >
            <label
              style={{
                fontSize: '15px',
                color: 'black',
                marginLeft: '10px'
              }}
            >
              Mật khẩu
            </label>
          </div>
          <div
            style={{
              display: 'flex',
              height: '100%',
              width: '60%',
              justifyContent: 'center',
              alignItems: 'center',
              borderLeft: '1px solid #a59a9a'
            }}
          >
            <input
              type="text"
              placeholder="Nhập mật khẩu"
              style={{
                height: '89%',
                width: '100%',
                fontSize: '15px',
                border: 'none'
              }}
            ></input>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            height: '14%',
            width: '90%',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid #a59a9a',
            marginTop: '15px'
          }}
        >
          <div
            style={{
              display: 'flex',
              height: '100%',
              width: '40%',
              alignItems: 'center',
              backgroundColor: '#e6e9f0'
            }}
          >
            <label
              style={{
                fontSize: '15px',
                color: 'black',
                marginLeft: '10px'
              }}
            >
              Mã bảo vệ
            </label>
          </div>
          <div
            style={{
              display: 'flex',
              height: '100%',
              width: '30%',
              justifyContent: 'center',
              alignItems: 'center',
              borderLeft: '1px solid #a59a9a'
            }}
          >
            <input
              type="text"
              placeholder=" "
              style={{
                height: '89%',
                width: '100%',
                fontSize: '15px',
                border: 'none'
              }}
            ></input>
          </div>
          {/* --------Này là mã bảo vệ nhé --------- */}
          <div
            style={{
              display: 'flex',
              height: '100%',
              width: '30%',
              justifyContent: 'center',
              alignItems: 'center',
              borderLeft: '1px solid #a59a9a',
              fontSize: '10px'
            }}
          >
            Này code giùm cái mã bảo vệ code dòng 213{' '}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            height: '20%',
            width: '90%',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid #a59a9a',
            marginTop: '15px'
          }}
        >
          <button
            style={{
              height: '100%',
              width: '100%',
              backgroundColor: '#3e69f6',
              color: 'white',
              fontSize: '19px',
              fontWeight: 'bold',
              border: 'none'
            }}
          >
            ĐĂNG NHẬP
          </button>
        </div>
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
