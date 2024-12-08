// import * as dao from "./dao.js";
// function EnrollmentRoutes(app) {
//   app.get("/api/enrollments", async (req, res) => {
//     const enrollments = await dao.findAllEnrollments();
//     res.json(enrollments);
//   });
//   app.post("/api/enrollments", async (req, res) => {
//     const enrollment = await dao.createEnrollment(req.body);
//     res.json(enrollment);
//   });
// }
// export default EnrollmentRoutes;
import * as dao from "./dao.js";
export default function EnrollmentRoutes(app) {
  app.get("/api/enrollments/", (req, res) => {
    res.json(dao.setEnrollments());
  });
  app.post("/api/enrollments/:courseId/:userId", async (req, res) => {
    const { courseId, userId } = req.params;
    const newEnrollment = await dao.enrollUserInCourse(userId, courseId);
    res.json(newEnrollment);
  });
  app.delete("/api/enrollments/:courseId/:userId", async (req, res) => {
    const { courseId, userId } = req.params;
    await dao.unenrollUserFromCourse(userId, courseId);
    res.sendStatus(204);
  });
}