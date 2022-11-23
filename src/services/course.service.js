import { api, COURSE_API } from '../config/api'


export const courseService = {
    // mock data
    getCourse: (query = '') => {
        return api.get(`${COURSE_API}${query}`)
    },

    getCourseDetail(id) {
        // return courses.find(e => e.id === id)
    },

    getRelative(id) {
        const start = Math.floor(Math.random() * (courses.length - 3))
        return courses.filter(e => e.id !== id).slice(start, start + 3)
    }
}