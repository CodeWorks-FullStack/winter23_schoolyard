import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class CourseOfferingsService {
  async editCourseOffering(offeringId, courseOfferingData) {
    const offering = await dbContext.CourseOfferings.findById(offeringId)
    if (!offering) {
      throw new BadRequest('Invalid offering Id')
    }

    // TODO validate

    const teacher = await dbContext.Account.findById(courseOfferingData.teacherId)

    if (!teacher) {
      throw new BadRequest('There is no teacher with that Id')
    }


    // TODO populate

    offering.teacherId = courseOfferingData.teacherId || offering.teacherId
    // offering.courseId = courseOfferingData.courseId || offering.courseId // Why can't you change this? NOOOOOO but this is a business rule!!!! $$$$$$$$$$$$ know how to do 🤯
    offering.location = courseOfferingData.location || offering.location
    offering.schedule = courseOfferingData.schedule || offering.schedule
    await offering.save()

    return offering
  }

  async getOfferingsByCourseId(courseId) {

    // [].filter(c => c.courseId == courseId)

    const offerings = await dbContext.CourseOfferings
    // PART 2
    .find({ courseId })
      // V include         v select
      .populate('teacher', 'name picture')
      .populate('course', 'name code')
    return offerings

  }

  async createCourseOffering(courseOfferingData) {

    // DO NOT RANDOMLY CREATE BEFORE YOU VALIDATE!!!!

    const course = await dbContext.Courses.findById(courseOfferingData.courseId)
    if (!course) {
      throw new BadRequest('you done messed up... there is no course with that Id... ' + courseOfferingData.courseId)
    }



    const courseOffering = await dbContext.CourseOfferings.create(courseOfferingData)
    return courseOffering
  }


}


export const courseOfferingsService = new CourseOfferingsService()
