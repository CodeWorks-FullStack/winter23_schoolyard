import { Schema } from "mongoose";

export const CourseSchema = new Schema({

  credits: { type: Number, required: true, default: 0 },
  // code: { type: String, required: true, minLength: 4, maxLength: 4, validate: /[0-9]/ },
  code: { type: String, required: true, minLength: 2, maxLength: 4, validate: /[0-9]/ },
  name: { type: String, required: true, maxLength: 100 },
  description: { type: String, default: '', maxLength: 5000 },
  prereqs: { type: String, default: '', maxLength: 100 }

}, { timestamps: true, toJSON: { virtuals: true } })
