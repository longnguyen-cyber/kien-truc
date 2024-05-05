import axiosClient from './axiosClient'

const ScheduleApi = {
    GetSchedule: () => {
        const url = '/schedule'
        return axiosClient.get(url)
    },
}
export default ScheduleApi
