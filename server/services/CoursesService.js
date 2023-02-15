import { dbContext } from "../db/DbContext.js"


class CoursesService {
  async createCourse(courseData) {
    const course = await dbContext.Courses.create(courseData)
    return course
  }

  async getCourses() {
    const courses = await dbContext.Courses.find()
    return courses
  }




}

export const coursesService = new CoursesService()
