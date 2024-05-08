import React, { useEffect, useState } from 'react'
import { FaCircleCheck } from 'react-icons/fa6'
import { IoMdCloseCircle } from 'react-icons/io'
import Dashboard from '../Dashboard'
import ClassApi from '../../api/class'
import CourseApi from '../../api/course'
const Course = () => {
  const [filter, setFilter] = useState('')
  const [classes, setClasses] = useState([])
  useEffect(() => {
    const classesData = async () => {
      // Call API to get classes
      const response = await ClassApi.GetClasses()
      if (response.status === 200) {
        const classesResponse = response.data
        setClasses(classesResponse)
      }
    }
    classesData()
  }, [])

  const handleChangeFilter = (event) => {
    setFilter(event.target.value)
  }
  // Sử dụng useState hook để theo dõi giá trị radio button đã được chọn
  const [selectedOption, setSelectedOption] = useState('')

  // Hàm xử lý sự kiện khi radio button được chọn
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
  }
  const [selectedRow, setSelectedRow] = useState(null)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            display: 'flex',
            height: '20%',
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <label
            style={{
              fontSize: '22px',
              marginTop: '10px',
              color: 'blue',
              fontWeight: 'bold',
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
            textAlign: 'center',
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
              marginRight: '10px',
            }}
          >
            <option value="3-st4">HK3 (2024-2025)</option>
            <option value="2-st4">HK2 (2024-2025)</option>
            <option value="1-st4">HK1 (2024-2025)</option>
            <option value="3-st3">HK3 (2023-2024)</option>
            <option value="2-st3">HK2 (2023-2024)</option>
            <option value="1-st3">HK1 (2023-2024)</option>
            <option value="3-st2">HK3 (2022-2023)</option>
            <option value="2-st2">HK2 (2022-2023)</option>
            <option value="1-st2">HK1 (2022-2023)</option>
            <option value="3-st1">HK3 (2021-2022)</option>
            <option value="2-st1">HK2 (2021-2022)</option>
            <option value="1-st1">HK1 (2021-2022)</option>
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
              marginRight: '10px',
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
              marginRight: '10px',
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
              color: 'red',
            }}
          />
          <label
            style={{
              fontSize: '15px',
              color: 'red',
              fontWeight: 'bold',
              marginRight: '10px',
            }}
            htmlFor="hocCaiThien"
          >
            HỌC CẢI THIỆN
          </label>
        </div>
        <table className="">
          <thead className="bg-blue-600">
            <tr>
              <th className="border border-slate-700 w-8"></th>
              <th className="border border-slate-700">STT</th>
              <th className="border border-slate-700">Mã HP</th>
              <th className="border border-slate-700">Tên môn học</th>
              <th className="border border-slate-700">Số TC</th>
              <th className="border border-slate-700">Bắt buộc</th>
              <th className="border border-slate-700">Học phần học trước</th>
            </tr>
          </thead>
          {classes.map((c, index) => {
            return (
              <tr
                key={index}
                className={`text-center ${
                  selectedRow === index ? 'bg-blue-200' : ''
                }`}
                onClick={() => setSelectedRow(index)}
              >
                <td className="border border-slate-700">
                  <input
                    type="radio"
                    checked={selectedRow === index}
                    onChange={() => setSelectedRow(index)}
                  />
                </td>
                <td className="border border-slate-700">{index + 1}</td>
                <td className="border border-slate-700">{c.class_id}</td>
                <td className="border border-slate-700">{c.class_name}</td>
                <td className="border border-slate-700">{c.subject.credits}</td>
                <td className="border border-slate-700">
                  {c.subject.isRequired ? (
                    <span className="flex justify-center text-green-500">
                      <FaCircleCheck />
                    </span>
                  ) : (
                    <span className="flex justify-center text-red-500">
                      <IoMdCloseCircle />
                    </span>
                  )}
                </td>
                <td className="border border-slate-700 text-red-600">
                  {c.subject.prerequisites
                    .map((item) => item.prerequisite_subject_id)
                    .join(', ')}
                </td>
              </tr>
            )
          })}
        </table>
        <button
          onClick={() => {
            const classId = classes[selectedRow].class_id
            CourseApi.enrollCourse({ class_id: classId }).then((res) => {
              if (res.status === 201) {
                alert('Đăng ký học phần thành công')
              } else {
                alert('Đăng ký học phần thất bại')
              }
            })
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-fit mx-auto mt-4"
        >
          Đắng ký
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          height: '20%',
          width: '76%',
          justifyContent: 'center',
          flexDirection: 'row',
          marginTop: '20px',
          backgroundColor: '#3e69f6',
        }}
      >
        <div
          style={{
            height: '70%',
            width: '100%',
            marginTop: '10px',
            marginLeft: '10px',
          }}
        >
          <label
            style={{
              fontSize: '15px',
              color: 'white',
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
            marginRight: '30px',
          }}
        >
          <label
            style={{
              fontSize: '15px',
              color: 'white',
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
          backgroundColor: 'lightblue',
        }}
      >
        <label
          style={{
            marginTop: '15px',
            fontSize: '12px',
            color: 'white',
          }}
        >
          Bản quyền 2024 - Trường Đại học Công nghiệp TP. Hồ Chí Minh
        </label>
      </div>
    </div>
  )
}

export default Course
