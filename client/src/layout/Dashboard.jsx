import React from 'react'
import logoIUH from '../assets/image/logoIUH.png'
const Dashboard = () => {
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
            Nguyễn Thúy Tình
          </label>
          <label
            style={{
              marginTop: '10px',
              marginLeft: '10px',
              fontSize: '13px',
              color: 'white'
            }}
          >
            Giới tính:
          </label>
          <label
            style={{
              marginTop: '10px',
              marginLeft: '10px',
              fontSize: '13px',
              color: 'white'
            }}
          >
            MSSV:
          </label>
          <label
            style={{
              marginTop: '10px',
              marginLeft: '10px',
              fontSize: '13px',
              color: 'white'
            }}
          >
            Trạng thái:
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
            >
              CHƯƠNG TRÌNH KHUNG
            </label>
          </div>
        </div>
      </div>
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

export default Dashboard
