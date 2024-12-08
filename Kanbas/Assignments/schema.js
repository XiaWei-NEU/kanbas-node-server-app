// import mongoose from "mongoose";
// const assignmentSchema = new mongoose.Schema(
//     {
//         _id: String,
//         title: String,
//         course: String,
//         due: String,
//         description: String,
//         points: String,
//         availableFrom: String,
//         availableUntil: String,
//     },
//     { collection: "assignments" }
// );
// export default assignmentSchema;

import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema(
 {
   _id: String,
   title: String,
   course: String,
   due: String,
   description: String,
    points:String,
    availableFrom: String,
    availableUntil: String,
 },
 { collection: "assignments" }
);
export default assignmentSchema;