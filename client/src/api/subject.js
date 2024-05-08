import axiosClient from './axiosClient'

const SubjectApi = {
  GetSubject: () => {
    const url = '/subject'
    return axiosClient.get(url)
  },
}
export default SubjectApi
