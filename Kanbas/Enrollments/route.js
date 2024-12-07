import * as dao from "./dao.js";

function EnrollmentRoutes(app) {
  app.get("/api/enrollments", async (req, res) => {
    const enrollments = await dao.findAllEnrollments();
    res.json(enrollments);
  });
  
  app.post("/api/enrollments", async (req, res) => {
    const enrollment = await dao.createEnrollment(req.body);
    res.json(enrollment);
  });
  
}

export default EnrollmentRoutes;