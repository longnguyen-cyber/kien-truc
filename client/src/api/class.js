import axiosClient from './axiosClient'

const ClassApi = {
  GetClasses: (term) => {
    const url = `/classes/${term}`
    return axiosClient.get(url)
  },
}
export default ClassApi
