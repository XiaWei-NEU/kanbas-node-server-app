import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    course: { type: mongoose.Schema.Types.ObjectId, ref: "courses" },
    status: {
      type: String,
      enum: ["ENROLLED", "PENDING", "DROPPED"],
      default: "ENROLLED",
    },
  },
  { collection: "enrollments" }
);

export default enrollmentSchema;