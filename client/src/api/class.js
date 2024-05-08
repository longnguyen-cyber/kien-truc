import axiosClient from './axiosClient'

const ClassApi = {
  GetClasses: () => {
    const url = '/classes'
    return axiosClient.get(url)
  },
}
export default ClassApi
