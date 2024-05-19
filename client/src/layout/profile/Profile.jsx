/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Header from '../Header'

import { useNavigate } from 'react-router-dom'
import GradeApi from '../../api/grade'
const Profile = () => {
  const navigate = useNavigate()
  const [grades, setGrades] = useState([])
  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    if (!token) {
      navigate('/login')
      return
    }
    const dataProfile = async () => {
      // Call API to get profile
      const response = await GradeApi.getGrade()
      if (response.status === 200) {
        setGrades(response.data)
      } else {
        navigate('/login')
      }
    }

    dataProfile()
  }, [])

  const terms = [
    'Học kì 1',
    'Học kì 2',
    'Học kì 3',
    'Học kì 4',
    'Học kì 5',
    'Học kì 6',
    'Học kì 7',
    'Học kì 8',
    'Học kì 9',
  ]
  const Body = ({ props }) => {
    const {
      term,
      grade,
      avgScore10,
      avgScore4,
      avgAccumulateScore,
      avgAccumulateScore4,
      sumCreditPass,
      sumCreditFail,
      sumOfCreditRegis,
      sumOfCreditAccumulatePass,
      rankerAccumulate,
      rankerOfTerm,
      year,
    } = props
    const renderScore = (item, index) => {
      return (
        <tr className="text-center mb-3">
          <td className="border border-slate-700 w-14">{index}</td>
          <td className="border border-slate-700">{item.class_id}</td>
          <td className="border border-slate-700">
            {item.subject.subject_name}
          </td>
          <td className="border border-slate-700">{item.midterm}</td>
          <td className="border border-slate-700 d-flex flex-column space-y-3 col-span-4">
            <div
              className="flex justify-between w-[101%] -ml-[1px]"
              style={{
                marginBottom: '-2px',
              }}
            >
              <td className="w-1/5 p-0">{item.theory_1 ?? ''}</td>
              <td className="w-1/5 p-0">{item.theory_2 ?? ''}</td>
              <td className="w-1/5 p-0">{item.theory_3 ?? ''}</td>
              <td className="w-1/5 p-0">{item.theory_4 ?? ''}</td>
              <td className="w-1/5 p-0">{item.theory_5 ?? ''}</td>
            </div>
          </td>

          <td className="border border-slate-700 d-flex flex-column space-y-3 col-span-4">
            <div
              className="flex justify-between w-[101%] -ml-[1px]"
              style={{
                marginBottom: '-2px',
              }}
            >
              <th className="w-1/5 p-0">{item.practice_1 ?? ''}</th>
              <th className="w-1/5 p-0">{item.practice_2 ?? ''}</th>
              <th className="w-1/5 p-0">{item.practice_3 ?? ''}</th>
              <th className="w-1/5 p-0">{item.practice_4 ?? ''}</th>
              <th className="w-1/5 p-0">{item.practice_5 ?? ''}</th>
            </div>
          </td>
          <td className="border border-slate-700">{item.final}</td>
          {/* điểm tổng kết */}
          <td className="border border-slate-700">{item.digit_score}</td>
          {/* Thang điểm 4 */}
          <td className="border border-slate-700">{item.digit_score / 2.5}</td>
          {/* Điểm chữ */}
          <td className="border border-slate-700">{item.letter_score}</td>
          {/* Xếp loại */}
          <td className="border border-slate-700">{item.rank}</td>
        </tr>
      )
    }

    return (
      <tbody className="mb-3">
        <tr className="border border-slate-700">
          <td colSpan={11} className="bg-gray-200 font-bold text-blue-800 pl-2">
            {terms[term - 1]} ({year}-{year + 1})
          </td>
        </tr>
        {grade.map((item, index) => renderScore(item, index + 1))}
        <tr>
          <td className="border border-slate-700 pl-2" colSpan={2}>
            Điểm trung bình học kì hệ 10: {avgScore10}
          </td>
          <td className="border border-slate-700 pl-2" colSpan={2}>
            Điểm trung bình học kì hệ 4: {avgScore4}
          </td>
          <td className="border border-slate-700 pl-2" colSpan={7}></td>
        </tr>
        <tr>
          <td className="border border-slate-700 pl-2" colSpan={2}>
            Điểm trung bình tích luỹ: {avgAccumulateScore}
          </td>
          <td className="border border-slate-700 pl-2" colSpan={2}>
            Điểm trung bình tích luỹ hệ 4: {avgAccumulateScore4}
          </td>
          <td className="border border-slate-700 pl-2" colSpan={7}></td>
        </tr>
        <tr>
          <td className="border border-slate-700 pl-2" colSpan={2}>
            Tổng số tín đăng ký: {sumOfCreditRegis}
          </td>
          <td className="border border-slate-700 pl-2" colSpan={2}>
            Tổng số tín chỉ tích luỹ: {sumOfCreditAccumulatePass}
          </td>
          <td className="border border-slate-700 pl-2" colSpan={7}></td>
        </tr>
        <tr>
          <td className="border border-slate-700 pl-2" colSpan={2}>
            Tổng số tín chỉ đạt: {sumCreditPass}
          </td>
          <td className="border border-slate-700 pl-2" colSpan={2}>
            Tổng số tín chỉ nợ tính đến hiện tại: {sumCreditFail}
          </td>
          <td className="border border-slate-700 pl-2" colSpan={7}></td>
        </tr>
        <tr>
          <td className="border border-slate-700 pl-2" colSpan={2}>
            Xếp loại học lực tích lũy: {rankerAccumulate}
          </td>
          <td className="border border-slate-700 pl-2" colSpan={2}>
            Xếp loại học lực học kỳ: {rankerOfTerm}
          </td>
          <td className="border border-slate-700 pl-2" colSpan={7}></td>
        </tr>
      </tbody>
    )
  }

  return (
    <div>
      <Header />
      <div className=" mx-4 mt-4 ">
        <table className="w-full">
          <thead className="bg-blue-300 text-white">
            <tr>
              <th className="border border-slate-700">STT</th>
              <th className="border border-slate-700 w-40">Mã lớp học phần</th>
              <th className="border border-slate-700 w-56">
                Tên môn học/học phần
              </th>
              <th className="border border-slate-700 w-20">Giữa kỳ</th>
              <th className="border border-slate-700 d-flex flex-column space-y-3 col-span-4">
                <p>Thường xuyên</p>
                <div
                  className="flex justify-between w-[101%] -ml-[1px]"
                  style={{
                    marginBottom: '-2px',
                  }}
                >
                  <th className="border border-slate-700 w-1/5 p-0">1</th>
                  <th className="border border-slate-700 w-1/5 p-0">2</th>
                  <th className="border border-slate-700 w-1/5 p-0">3</th>
                  <th className="border border-slate-700 w-1/5 p-0">4</th>
                  <th className="border border-slate-700 w-1/5 p-0">5</th>
                </div>
              </th>
              <th className="border border-slate-700 d-flex flex-column space-y-3 col-span-4">
                <p>Thực hành</p>
                <div
                  className="flex justify-between w-[101%] -ml-[1px]"
                  style={{
                    marginBottom: '-2px',
                  }}
                >
                  <th className="border border-slate-700 w-1/5 p-0">1</th>
                  <th className="border border-slate-700 w-1/5 p-0">2</th>
                  <th className="border border-slate-700 w-1/5 p-0">3</th>
                  <th className="border border-slate-700 w-1/5 p-0">4</th>
                  <th className="border border-slate-700 w-1/5 p-0">5</th>
                </div>
              </th>

              <th className="border border-slate-700 w-20">Cuối kì</th>
              <th className="border border-slate-700 w-20">Điểm tổng</th>
              <th className="border border-slate-700 w-20">Thang điểm 4</th>
              <th className="border border-slate-700 w-20">Điểm chữ</th>
              <th className="border border-slate-700 w-20">Xếp loại</th>
            </tr>
          </thead>

          {grades.length > 0 &&
            grades.map((grade, index) => {
              return <Body props={grade} />
            })}
          {/* {subjects.length > 0 && (
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
          )} */}
        </table>
      </div>
      <br />
    </div>
  )
}

export default Profile
