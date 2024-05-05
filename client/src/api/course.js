import axiosClient from './axiosClient'

const CourseApi = {
    //register course
    enrollCourse: (enrollmentData) => {
        const url = '/enrollments'
        return axiosClient.post(url, enrollmentData)
    },

    //confirm course
    confirmEnrollment: (enrollmentId) => {
        const url = `/enrollments/${enrollmentId}/confirm`
        return axiosClient.put(url)
    },

    //cancel course
    cancelEnrollment: (enrollmentId) => {
        const url = `/enrollments/${enrollmentId}/cancel`
        return axiosClient.put(url)
    },

    //get all courses for register
    getEnrolledCourses: () => {
        const url = '/enrollments'
        return axiosClient.get(url)
    },

    //get course detail
    getEnrollmentDetail: (enrollmentId) => {
        const url = `/enrollments/${enrollmentId}`
        return axiosClient.get(url)
    },

    //max course to check over 30 courses in semester if true can't register else can register
    getMaxCourse: () => {
        const url = '/courses/max-course'
        return axiosClient.get(url)
    },
}

export default CourseApi
