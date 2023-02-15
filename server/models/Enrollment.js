import { Schema } from "mongoose";

const ObjectId = Schema.Types.ObjectId

export const EnrollmentSchema = new Schema({

  status: { type: String, enum: ['enrolled', 'failed', 'dropped', 'passed'], lowercase: true },

  // RELATIONSHIPS 💘
  studentId: { type: ObjectId, ref: 'Account', required: true },
  courseOfferingId: { type: ObjectId, ref: 'CoursesOfferingId', required: true }

}, { timestamps: true, toJSON: { virtuals: true } })
