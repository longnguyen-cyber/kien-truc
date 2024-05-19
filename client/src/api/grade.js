import axiosClient from './axiosClient'

const GradeApi = {
  //register course
  getGrade: () => {
    const url = '/grades'
    return axiosClient.get(url)
  },
}

export default GradeApi
