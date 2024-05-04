import React, { useState } from 'react'

import Dashboard from '../Dashboard'
const Course = () => {
  const [filter, setFilter] = useState('')

  const handleChangeFilter = (event) => {
    setFilter(event.target.value)
  }
  // Sử dụng useState hook để theo dõi giá trị radio button đã được chọn
  const [selectedOption, setSelectedOption] = useState('')

  // Hàm xử lý sự kiện khi radio button được chọn
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
  }
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
              fontSize: '22px',
              marginTop: '10px',
              color: 'blue',
              fontWeight: 'bold'
            }}
          >
            ĐĂNG KÝ HỌC PHẦN
          </label>
        </div>
        <div
          style={{
            display: 'flex',
            height: '50%',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '15px',
            textAlign: 'center'
          }}
        >
          <label style={{ marginRight: '10px' }}>Đợt đăng ký: </label>

          <select
            name="filter"
            value={filter}
            onChange={handleChangeFilter}
            style={{
              overflowY: 'scroll',
              scrollbarWidth: 'thin',
              height: '20px',
              scrollbarColor: '#888 #f5f5f5',
              marginRight: '10px'
            }}
          >
            <option value="">HK3 (2024-2025)</option>
            <option value="HK2 (2024-2025)">HK2 (2024-2025)</option>
            <option value="HK1 (2024-2025)">HK1 (2024-2025)</option>
            <option value="HK3 (2023-2024)">HK3 (2023-2024)</option>
            <option value="HK2 (2023-2024)">HK2 (2023-2024)</option>
            <option value="HK1 (2023-2024)">HK1 (2023-2024)</option>
            <option value="HK3 (2022-2023)">HK3 (2022-2023)</option>
            <option value="HK2 (2022-2023)">HK2 (2022-2023)</option>
            <option value="HK1 (2022-2023)">HK1 (2022-2023)</option>
            <option value="HK3 (2021-2022)">HK3 (2021-2022)</option>
            <option value="HK2 (2021-2022)">HK2 (2021-2022)</option>
            <option value="HK1 (2021-2022)">HK1 (2021-2022)</option>
          </select>
          <input
            type="radio"
            id="hocMoi"
            name="options"
            value="hocMoi"
            checked={selectedOption === 'hocMoi'}
            onChange={handleOptionChange}
          />
          <label
            style={{
              fontSize: '15px',
              color: 'red',
              fontWeight: 'bold',
              marginRight: '10px'
            }}
            htmlFor="hocMoi"
          >
            HỌC MỚI
          </label>

          <input
            type="radio"
            id="hocLai"
            name="options"
            value="hocLai"
            checked={selectedOption === 'hocLai'}
            onChange={handleOptionChange}
          />
          <label
            style={{
              fontSize: '15px',
              color: 'red',
              fontWeight: 'bold',
              marginRight: '10px'
            }}
            htmlFor="hocLai"
          >
            HỌC LẠI
          </label>

          <input
            type="radio"
            id="hocCaiThien"
            name="options"
            value="hocCaiThien"
            checked={selectedOption === 'hocCaiThien'}
            onChange={handleOptionChange}
            style={{
              fontSize: '15px',
              color: 'red'
            }}
          />
          <label
            style={{
              fontSize: '15px',
              color: 'red',
              fontWeight: 'bold',
              marginRight: '10px'
            }}
            htmlFor="hocCaiThien"
          >
            HỌC CẢI THIỆN
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
              width: '3%',
              flexDirection: 'row',
              textAlign: 'center',
              fontSize: '14px',
              border: '0.5px solid grey',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center'
            }}
          ></div>
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
            Mã MH cũ
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
            Mã HP
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
              width: '4%',
              flexDirection: 'row',
              textAlign: 'center',
              fontSize: '14px',
              alignItems: 'center',
              justifyContent: 'center',
              border: '0.5px solid grey'
            }}
          >
            TC
          </div>
          <div
            style={{
              display: 'flex',
              width: '6%',
              flexDirection: 'row',
              textAlign: 'center',
              alignItems: 'center',
              fontSize: '14px',
              justifyContent: 'center',
              border: '0.5px solid grey'
            }}
          >
            Bắt buộc
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
              width: '15%',
              flexDirection: 'row',
              textAlign: 'center',
              alignItems: 'center',
              fontSize: '14px',
              justifyContent: 'center',
              border: '0.5px solid grey'
            }}
          >
            Học phần tương đương
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

export default Course
