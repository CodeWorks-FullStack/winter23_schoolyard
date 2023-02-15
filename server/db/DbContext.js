import mongoose from 'mongoose';
import { AccountSchema } from '../models/Account';
import { CourseSchema } from '../models/Course.js';
import { CourseOfferingSchema } from '../models/CourseOffering.js';
import { EnrollmentSchema } from '../models/Enrollment.js';
import { ValueSchema } from '../models/Value';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Courses = mongoose.model('Course', CourseSchema)

  CourseOfferings = mongoose.model('CourseOffering', CourseOfferingSchema)

  Enrollments = mongoose.model('Enrollment', EnrollmentSchema)

}

export const dbContext = new DbContext()
