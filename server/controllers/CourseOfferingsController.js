import { courseOfferingsService } from "../services/CourseOfferingsService.js";
import BaseController from "../utils/BaseController.js";


export class CourseOfferingsController extends BaseController {

  constructor() {
    super('api/courseofferings')
    this.router
      .post('', this.createCourseOffering)
      .put('/:offeringId', this.editCourseOffering)

  }
  async editCourseOffering(req, res, next) {
    try {
      const courseOfferingData = req.body
      const offeringId = req.params.offeringId
      const offering = await courseOfferingsService.editCourseOffering(offeringId, courseOfferingData)
      return res.send(offering)
    } catch (error) {
      next(error)
    }
  }

  async createCourseOffering(req, res, next) {
    try {
      const courseOfferingData = req.body
      const courseOffering = await courseOfferingsService.createCourseOffering(courseOfferingData)
      return res.send(courseOffering)
    } catch (error) {
      next(error)
    }
  }


}
