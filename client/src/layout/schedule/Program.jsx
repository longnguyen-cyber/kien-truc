import React, { useEffect, useState } from 'react'
import { FaCircleCheck } from 'react-icons/fa6'
import SubjectApi from '../../api/subject'
import Footer from '../Footer'
import Header from '../Header'
const Program = () => {
  const [subjects, setSubjects] = useState([])

  useEffect(() => {
    const subjectsData = async () => {
      // Call API to get subjects
      const response = await SubjectApi.GetSubject()
      if (response.status === 200) {
        const subjectsResponse = response.data
        setSubjects(subjectsResponse)
      }
    }
    subjectsData()
  }, [])

  const Body = ({ props }) => {
    const { term, subjects: subs } = props

    // Divide subjects into required and optional
    const requiredSubjects = subs.filter((subject) => subject.isRequired)
    const optionalSubjects = subs.filter((subject) => !subject.isRequired)

    // Function to render a row for a subject
    const renderSubjectRow = (subject, index) => (
      <tr
        key={index}
        className={`text-center ${
          subject.status === true ? 'bg-gray-200' : 'bg-white'
        }`}
      >
        <td className="border border-slate-700">{index + 1}</td>
        <td className="border border-slate-700">{subject.subject_id}</td>
        <td className="border border-slate-700">{subject.subject_name}</td>
        <td className="border border-slate-700 text-red-600 font-semibold">
          {subject.prerequisites
            .map((item) => item.prerequisite_subject_id)
            .join(', ')}
        </td>
        <td className="border border-slate-700">{subject.credits}</td>
        <td className="border border-slate-700">{subject.theory}</td>
        <td className="border border-slate-700">{subject.practice}</td>
        <td className="border border-slate-700 ">
          {subject.status === false ? (
            ''
          ) : (
            <span className="flex justify-center text-green-500">
              <FaCircleCheck />
            </span>
          )}
        </td>
      </tr>
    )

    return (
      <tbody>
        <tr className="border border-slate-700 bg-cyan-500 text-white">
          <td className="border border-slate-700 pl-2" colSpan={5}>
            {term}
          </td>
          <td className="border border-slate-700 pl-2" colSpan={3}>
            Tổng số tính chỉ:{' '}
            {subs.reduce((total, subject) => total + subject.credits, 0)}
          </td>
        </tr>

        {/* Render required subjects */}
        <tr className="border border-slate-700 text-blue-600 font-bold bg-sky-200">
          <td className="border border-slate-700 pl-2" colSpan={8}>
            Học phần bắt buộc
          </td>
        </tr>
        {requiredSubjects.map(renderSubjectRow)}

        {/* Render optional subjects */}
        {optionalSubjects.length > 0 && (
          <tr className="border border-slate-700 text-blue-600 font-bold bg-sky-200">
            <td className="border border-slate-700 pl-2" colSpan={8}>
              Học phần tự chọn
            </td>
          </tr>
        )}
        {optionalSubjects.map(renderSubjectRow)}
      </tbody>
    )
  }

  // Rest of your component remains unchanged

  return (
    <div>
      <Header />
      <div className="w-3/4 mx-auto mt-4">
        <table className="w-full">
          <thead className="bg-blue-600">
            <tr>
              <th className="border border-slate-700">STT</th>
              <th className="border border-slate-700">Mã môn học</th>
              <th className="border border-slate-700">Tên môn học</th>
              <th className="border border-slate-700">Học phần học trước</th>
              <th className="border border-slate-700">Số TC/ĐVHT</th>
              <th className="border border-slate-700">Số tiết lí thuyết</th>
              <th className="border border-slate-700">Số tiết TH</th>
              <th className="border border-slate-700">Đạt</th>
            </tr>
          </thead>

          {subjects.length > 0 && (
            <Body
              props={{
                term: 'Học kì 1',
                subjects: subjects.filter((item) => item.term === '1-1st'),
              }}
            />
          )}
          {subjects.length > 0 && (
            <Body
              props={{
                term: 'Học kì 2',
                subjects: subjects.filter((item) => item.term === '2-1st'),
              }}
            />
          )}
        </table>
      </div>
      <br />
      <Footer />
    </div>
  )
}

export default Program
