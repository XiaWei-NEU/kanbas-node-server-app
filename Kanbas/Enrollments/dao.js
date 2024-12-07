import enrollmentSchema from "./schema.js";
import mongoose from "mongoose";
const enrollmentModel = mongoose.model("enrollments", enrollmentSchema);

export const findAllEnrollments = () => enrollmentModel.find();
export const createEnrollment = (enrollment) => enrollmentModel.create(enrollment);
export const deleteEnrollment = (enrollmentId) => enrollmentModel.deleteOne({ _id: enrollmentId });
export const updateEnrollment = (enrollmentId, enrollment) => 
  enrollmentModel.updateOne({ _id: enrollmentId }, { $set: enrollment });