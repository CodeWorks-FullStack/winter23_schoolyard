import { courseOfferingsService } from "../services/CourseOfferingsService.js"
import { coursesService } from "../services/CoursesService.js"
import BaseController from "../utils/BaseController.js"


export class CoursesController extends BaseController {

  constructor() {
    super('api/courses')
    this.router
      .get('', this.getCourses)
      .post('', this.createCourse)
      .get('/:courseId/offerings', this.getCourseOfferings)
    // .post('/:id/offerings', this.createCourseOffering)
  }
  async getCourseOfferings(req, res, next) {
    try {
      const courseId = req.params.courseId
      const courseOfferings = await courseOfferingsService.getOfferingsByCourseId(courseId)
      res.send(courseOfferings)
    } catch (error) {
      next(error)
    }
  }
  // async createCourseOffering(req, res, next) {
  //   try {
  //     // do not forget validation of ids
  //     const courseOfferingData = req.body
  //     courseOfferingData.courseId = req.params.id

  //     const courseOffering = await courseOfferingsService.createCourseOffering(courseOfferingData)
  //     return res.send(courseOffering)
  //   } catch (error) {
  //     next(error)
  //   }
  // }

  async createCourse(req, res, next) {
    try {
      let courseData = req.body
      let course = await coursesService.createCourse(courseData)
      return res.send(course)
    } catch (error) {
      next(error)
    }
  }

  async getCourses(req, res, next) {
    try {
      let courses = await coursesService.getCourses()
      return res.send(courses)
    } catch (error) {
      next(error)
    }
  }


}
