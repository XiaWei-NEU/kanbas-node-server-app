// import Database from "../Database/index.js";
// import * as dao from "./dao.js";
// import * as modulesDao from "../Modules/dao.js";
// import * as enrollmentsDao from "../Enrollments/dao.js";
// export default function CourseRoutes(app) {
//     app.get("/api/courses", async (req, res) => {
//         const courses = await dao.findAllCourses();
//         res.send(courses);
//     });
//     app.post("/api/courses", async (req, res) => {
//         const insertCourse = { ...req.body, _id: new Date().getTime().toString() };
//         const course = await dao.createCourse(insertCourse);
//         const currentUser = req.session["currentUser"];
//         if (currentUser) {
//             await enrollmentsDao.enrollUserInCourse(currentUser._id, course._id);
//         }
//         res.json(course);
//     });
//     app.delete("/api/courses/:courseId", async (req, res) => {
//         const { courseId } = req.params;
//         const status = await dao.deleteCourse(courseId);
//         res.send(status);
//     });
//     app.put("/api/courses/:courseId", async (req, res) => {
//         const { courseId } = req.params;
//         const courseUpdates = req.body;
//         const status = await dao.updateCourse(courseId, courseUpdates);
//         res.send(status);
//     });
//     const findUsersForCourse = async (req, res) => {
//         const { cid } = req.params;
//         const users = await enrollmentsDao.findUsersForCourse(cid);
//         res.json(users);
//     };
//     app.get("/api/courses/:cid/users", findUsersForCourse);
//     // app.get("/api/courses/:courseNumber", async (req, res) => {
//     //     const { courseNumber } = req.params;
//     //     const status = await dao.findCourseByNumber(courseNumber);
//     //     res.send(status);
//     // });
// }

import Database from "../Database/index.js";
import * as dao from "./dao.js";
import * as modulesDao from "../Modules/dao.js";
import * as enrollmentsDao from "../Enrollments/dao.js";
export default function CourseRoutes(app) {
  app.get("/api/courses", async (req, res) => {
    const courses = await dao.findAllCourses();
    //console.log(courses);
    res.send(courses);
  });

   app.post("/api/courses", async (req, res) => {
     const insertCourse = {...req.body, _id: new Date().getTime().toString()};
   const course = await dao.createCourse(insertCourse);
   const currentUser = req.session["currentUser"];
   if (currentUser) {
     await enrollmentsDao.enrollUserInCourse(currentUser._id, course._id);
   }

   res.json(course);
 });


  // app.delete("/api/courses/:id", (req, res) => {
  //   const { id } = req.params;
  //   Database.courses = Database.courses.filter((c) => c._id !== id);
  //   res.sendStatus(204);
  // });
  app.delete("/api/courses/:courseId", async (req, res) => {
    const { courseId } = req.params;
    const status = await dao.deleteCourse(courseId);
    res.send(status);

  });


  // app.put("/api/courses/:id", (req, res) => {
  //   const { id } = req.params;
  //   const course = req.body;
  //   Database.courses = Database.courses.map((c) =>
  //       c._id === id ? { ...c, ...course } : c
  //   );
  //   res.sendStatus(204);
  // });
  app.put("/api/courses/:courseId", async (req, res) => {
   const { courseId } = req.params;
   const courseUpdates = req.body;
   const status = await dao.updateCourse(courseId, courseUpdates);
   res.send(status);
 });
 const findUsersForCourse = async (req, res) => {
   const { cid } = req.params;
   const users = await enrollmentsDao.findUsersForCourse(cid);
   res.json(users);
 };
 app.get("/api/courses/:cid/users", findUsersForCourse);



}