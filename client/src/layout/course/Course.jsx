import React, { useEffect, useState } from 'react'
import { FaCircleCheck } from 'react-icons/fa6'
import { IoMdCloseCircle } from 'react-icons/io'
import Header from '../Header'
import ClassApi from '../../api/class'
import CourseApi from '../../api/course'
import Footer from '../Footer'
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
  const [selectedOption, setSelectedOption] = useState('hocMoi')

  // Hàm xử lý sự kiện khi radio button được chọn
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
  }
  const [selectedSubject, setSelectedSubject] = useState(null)

  const [selectedDetail, setSelectedDetail] = useState(null)
  const RenderClass = ({ classes }) => {
    return (
      <div className="mx-auto w-full mt-8">
        <p className="font-bold text-xl mb-2">Lớp học phần chờ đăng ký</p>

        <table className="w-full">
          <thead className="bg-blue-600">
            <tr>
              <th className="border border-slate-700 w-8"></th>
              <th className="border border-slate-700">STT</th>
              <th className="border border-slate-700">Mã LHP</th>
              <th className="border border-slate-700">Tên lớp học phần</th>
              <th className="border border-slate-700">Sĩ số tối đa</th>
              <th className="border border-slate-700">Đã đăng ký</th>
              <th className="border border-slate-700">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((c, index) => {
              const subject = c.subject
              return (
                <tr
                  key={index}
                  // className={`text-center ${
                  //   selectedRow === index ? 'bg-blue-200' : ''
                  // }`}
                  // onClick={() => setSelectedRow(index)}
                  className={`text-center ${
                    selectedDetail &&
                    selectedDetail.class.class_id === c.class_id
                      ? 'bg-blue-200'
                      : ''
                  }`}
                  onClick={() => setSelectedDetail({ class: c })}
                >
                  <td className="border border-slate-700">
                    <input
                      type="radio"
                      // checked={selectedRow === index}
                      // onChange={() => setSelectedRow(index)}
                      checked={
                        selectedDetail &&
                        selectedDetail.class.class_id === c.class_id
                      }
                      onChange={() => setSelectedDetail({ class: c })}
                    />
                  </td>
                  <td className="border border-slate-700">{index + 1}</td>
                  <td className="border border-slate-700">{c.class_id}</td>
                  <td className="border border-slate-700">
                    {subject.subject_name}
                  </td>
                  <td className="border border-slate-700">{c.max_capacity}</td>
                  <td className="border border-slate-700">
                    {c.current_capacity}
                  </td>
                  <td className="border border-slate-700">
                    {c.isEnrolling ? 'Chờ đăng ký' : 'Đã đóng'}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }

  const [selectedFinal, setSelectedFinal] = useState(null)
  const RenderDetailClass = ({ classes }) => {
    const details = classes.details
    return (
      <div className="mx-auto w-full mt-8">
        <p className="font-bold text-xl mb-2">Chi tiết lớp học phần</p>

        <table className="w-full">
          <thead className="bg-blue-600">
            <tr>
              <th className="border border-slate-700 w-8"></th>
              <th className="border border-slate-700">STT</th>
              <th className="border border-slate-700">Lịch học</th>
              <th className="border border-slate-700">Nhóm TH</th>
              <th className="border border-slate-700">Phòng</th>
              <th className="border border-slate-700">Dãy nhà</th>
              <th className="border border-slate-700">Giảng viên</th>
            </tr>
          </thead>
          <tbody>
            {details.map((d, index) => {
              return (
                <tr
                  key={index}
                  // className={`text-center ${
                  //   selectedRow === index ? 'bg-blue-200' : ''
                  // }`}
                  // onClick={() => setSelectedRow(index)}
                  className={`text-center ${
                    selectedFinal &&
                    selectedFinal.class_detail_id === d.class_detail_id
                      ? 'bg-blue-200'
                      : ''
                  }`}
                  onClick={() => {
                    setSelectedFinal(d)
                  }}
                >
                  <td className="border border-slate-700">
                    <input
                      type="radio"
                      // checked={selectedRow === index}
                      // onChange={() => setSelectedRow(index)}
                      checked={
                        selectedFinal &&
                        selectedFinal.class_detail_id === d.class_detail_id
                      }
                      onChange={() => setSelectedFinal(d)}
                    />
                  </td>
                  <td className="border border-slate-700">{index + 1}</td>
                  <td className="border border-slate-700">{d.study_time}</td>
                  <td className="border border-slate-700">
                    {d.group_practice}
                  </td>
                  <td className="border border-slate-700">{d.room_name}</td>
                  <td className="border border-slate-700">{d.towner}</td>
                  <td className="border border-slate-700">
                    {classes.professor_name}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <div className="mx-auto w-3/4 mt-4 border text-center p-2">
        <strong className="text-blue-800 text-xl">ĐĂNG KÝ HỌC PHẦN</strong>
        <div className="flex justify-center items-center mt-4">
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
            className="text-red-500 font-bold text-sm mr-2"
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
            className="text-red-500 font-bold text-sm mr-2"
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
          />
          <label
            className="text-red-500 font-bold text-sm"
            htmlFor="hocCaiThien"
          >
            HỌC CẢI THIỆN
          </label>
        </div>
        <table className="w-full mt-2">
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
            const subject = c.subject
            return (
              <tr
                key={index}
                className={`text-center ${
                  selectedSubject &&
                  selectedSubject.subject.subject_id === subject.subject_id
                    ? 'bg-blue-200'
                    : ''
                }`}
                onClick={() => {
                  setSelectedSubject(c)
                  setSelectedDetail(null)
                }}
              >
                <td className="border border-slate-700">
                  <input
                    type="radio"
                    checked={
                      selectedSubject &&
                      selectedSubject.subject.subject_id === subject.subject_id
                    }
                    onChange={() => setSelectedSubject(index)}
                  />
                </td>
                <td className="border border-slate-700">{index + 1}</td>
                <td className="border border-slate-700">
                  {subject.subject_id}
                </td>
                <td className="border border-slate-700">
                  {subject.subject_name}
                </td>
                <td className="border border-slate-700">{subject.credits}</td>
                <td className="border border-slate-700">
                  {subject.isRequired ? (
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
                  {subject.prerequisites
                    .map((item) => item.prerequisite_subject_id)
                    .join(', ')}
                </td>
              </tr>
            )
          })}
        </table>
        {selectedSubject && <RenderClass classes={selectedSubject.class} />}
        {selectedDetail && <RenderDetailClass classes={selectedDetail.class} />}
        <button
          onClick={() => {
            const classId = selectedFinal.class_id
            // CourseApi.enrollCourse({ class_id: classId }).then((res) => {
            //   if (res.status === 201) {
            //     alert('Đăng ký học phần thành công')
            //   } else {
            //     alert('Đăng ký học phần thất bại')
            //   }
            // })
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-fit mx-auto mt-4"
        >
          Đăng ký
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default Course
