import Database from "../Database/index.js";
// export function enrollUserInCourse(userId, courseId) {
//   const { enrollments } = Database;
//   const newEnrollment = { _id: Date.now(), user: userId, course: courseId };
//   enrollments.push(newEnrollment);
//   return newEnrollment;
// }
// export function setEnrollments() {
//   return Database.enrollments;
// }
//
// export function deleteEnrollments(userId, courseId) {
//   const { enrollments } = Database;
//   enrollments.filter((enrollment) => !(enrollment.user === userId && enrollment.course === courseId));
// }
import model from "./model.js";
import * as courseDao from "../Courses/dao.js";
import * as userDao from "../Users/dao.js";
import mongoose from "mongoose";
export async function findCoursesForUser(userId) {
 const enrollments = await model.find({user:userId }).lean();
 const courses = [];
for (const enrollment of enrollments) {
  const course = await courseDao.findCourseById(enrollment.course);
  if (course === null) {
    continue;
  }
  courses.push(course);
}
 return courses;

}
export async function findUsersForCourse(courseId) {
 const enrollments = await model.find({ course: courseId }).lean();
 const users = [];
 for (const enrollment of enrollments) {
   const user = await userDao.findUserById(enrollment.user);
   users.push(user);
 }
 return users;
}
export function enrollUserInCourse(user, course) {
 return model.create({ user, course });
}
export function unenrollUserFromCourse(user, course) {
 return model.deleteOne({ user, course });
}