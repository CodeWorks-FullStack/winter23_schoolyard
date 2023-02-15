import { Schema } from "mongoose";

const ObjectId = Schema.Types.ObjectId


export const CourseOfferingSchema = new Schema({

  schedule: { type: String, default: '', maxLength: 500 },
  location: { type: String, default: '', maxLength: 500 },

  // RELATIONSHIPS 💘
  courseId: { type: ObjectId, ref: 'Course', required: true },
  teacherId: { type: ObjectId, ref: 'Account' }


}, { timestamps: true, toJSON: { virtuals: true } })
