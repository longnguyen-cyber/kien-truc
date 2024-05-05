import React from 'react'
import Dashboard from '../Dashboard'

const Schedule = () => {
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
              fontSize: '20px',
              marginTop: '10px',
              color: 'blue',
              fontWeight: 'bold'
            }}
          >
            TRA CỨU CHƯƠNG TRÌNH KHUNG
          </label>
        </div>
        <div
          style={{
            display: 'flex',
            width: '100%',
            marginTop: '15px'
          }}
        >
          <label
            style={{
              color: 'orange',
              fontWeight: 'bold'
            }}
          >
            SINH VIÊN :{' '}
          </label>
        </div>
        <div
          style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'column'
          }}
        >
          <label
            style={{
              display: 'flex',
              width: '100%',
              marginLeft: '100px',
              fontSize: '14px',
              color: 'blue',
              marginTop: '10px'
            }}
          >
            ĐẠI HỌC{' '}
          </label>
          <label
            style={{
              display: 'flex',
              width: '100%',
              marginLeft: '100px',
              fontSize: '14px',
              marginTop: '7px',
              color: 'blue'
            }}
          >
            KHÓA{' '}
          </label>
          <label
            style={{
              display: 'flex',
              width: '100%',
              marginLeft: '100px',
              fontSize: '14px',
              marginTop: '7px',
              color: 'blue'
            }}
          >
            CƠ SỞ{' '}
          </label>
          <label
            style={{
              display: 'flex',
              width: '100%',
              marginLeft: '100px',
              fontSize: '14px',
              marginTop: '7px',
              color: 'blue'
            }}
          >
            NGÀNH{' '}
          </label>
          <label
            style={{
              display: 'flex',
              width: '100%',
              marginTop: '7px',
              marginLeft: '100px',
              fontSize: '14px',
              color: 'blue'
            }}
          >
            CHUYÊN NGÀNH{' '}
          </label>
        </div>
        <div
          style={{
            display: 'flex',
            width: '100%',
            marginTop: '15px'
          }}
        >
          <label
            style={{
              color: 'orange',
              fontWeight: 'bold'
            }}
          >
            THÔNG TIN CHƯƠNG TRÌNH KHUNG
          </label>
        </div>
        <div
          style={{
            display: 'flex',
            height: '50%',
            width: '100%',
            flexDirection: 'row',
            marginTop: '15px',
            backgroundColor: '#316dc2ebe'
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '4%',
              flexDirection: 'row',
              textAlign: 'center',
              fontSize: '14px',
              border: '0.5px solid grey',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center'
            }}
          >
            STT
          </div>
          <div
            style={{
              display: 'flex',
              width: '9%',
              justifyContent: 'center',
              flexDirection: 'row',
              textAlign: 'center',
              fontSize: '14px',
              border: '0.5px solid grey',
              alignItems: 'center'
            }}
          >
            Mã môn học
          </div>

          <div
            style={{
              display: 'flex',
              width: '30%',
              flexDirection: 'row',
              justifyContent: 'center',
              textAlign: 'center',
              fontSize: '14px',
              alignItems: 'center',
              border: '0.5px solid grey'
            }}
          >
            Tên môn học
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '11%',
              flexDirection: 'row',
              textAlign: 'center',
              fontSize: '14px',
              border: '0.5px solid grey',
              alignItems: 'center'
            }}
          >
            Mã học phần
          </div>
          <div
            style={{
              display: 'flex',
              width: '17%',
              flexDirection: 'row',
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              border: '0.5px solid grey',
              fontSize: '14px'
            }}
          >
            Học phần: học trước(a), tiên quyết(b),song hành (c)
          </div>
          <div
            style={{
              display: 'flex',
              width: '4%',
              flexDirection: 'row',
              textAlign: 'center',
              fontSize: '14px',
              alignItems: 'center',
              justifyContent: 'center',
              border: '0.5px solid grey'
            }}
          >
            Số TC/ĐVHT
          </div>
          <div
            style={{
              display: 'flex',
              width: '5%',
              flexDirection: 'row',
              textAlign: 'center',
              alignItems: 'center',
              fontSize: '14px',
              justifyContent: 'center',
              border: '0.5px solid grey'
            }}
          >
            Số tiết LT
          </div>
          <div
            style={{
              display: 'flex',
              width: '5%',
              flexDirection: 'row',
              textAlign: 'center',
              alignItems: 'center',
              fontSize: '14px',
              justifyContent: 'center',
              border: '0.5px solid grey'
            }}
          >
            Số tiết TH
          </div>
          <div
            style={{
              display: 'flex',
              width: '4%',
              flexDirection: 'row',
              textAlign: 'center',
              alignItems: 'center',
              fontSize: '14px',
              justifyContent: 'center',
              border: '0.5px solid grey'
            }}
          >
            Đạt
          </div>
          <div
            style={{
              display: 'flex',
              width: '10%',
              flexDirection: 'row',
              textAlign: 'center',
              alignItems: 'center',
              fontSize: '14px',
              justifyContent: 'center',
              border: '0.5px solid grey'
            }}
          >
            Đề cương môn học
          </div>
        </div>
      </div>
    </div>
  )
}

export default Schedule
