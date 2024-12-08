// import db from "../Database/index.js";
// import * as dao from "./dao.js";
// export default function AssignmentRoutes(app) {
//     app.get("/api/courses/:cid/assignments", async (req, res) => {
//         const { cid } = req.params;
//         const assignments = await dao.findAssignmentsForCourse(cid);
//         res.json(assignments);
//     });
//     app.post("/api/courses/:cid/assignments", async (req, res) => {
//         const { cid } = req.params;
//         const newAssignment = {
//             ...req.body,
//             course: cid,
//             _id: new Date().getTime().toString(),
//         };
//         await dao.createAssignment(newAssignment);
//         res.send(newAssignment);
//     });
//     app.delete("/api/assignments/:mid", async (req, res) => {
//         const { mid } = req.params;
//         await dao.deleteAssignment(mid);
//         res.sendStatus(200);
//     });
//     app.put("/api/assignments/:mid", async (req, res) => {
//         const { mid } = req.params;
//         await dao.updateAssignment(mid, req.body);
//         res.sendStatus(204);
//     });
// }

import db from "../Database/index.js";
import * as dao from "./dao.js";
export default function AssignmentRoutes(app) {
  app.get("/api/courses/:cid/assignments", async (req, res) => {
    const { cid } = req.params;
    const assignments = await dao.findAssignmentsForCourse(cid);
    res.json(assignments);
  });

  app.post("/api/courses/:cid/assignments", async (req, res) => {
    const { cid } = req.params;
    const newAssignment = {
      ...req.body,
      course: cid,
      _id: new Date().getTime().toString(),
    };
    await dao.createAssignment(newAssignment);
    res.send(newAssignment);
  });

  app.delete("/api/assignments/:mid", async (req, res) => {
    const { mid } = req.params;
    await dao.deleteAssignment(mid);
    res.sendStatus(200);
  });

  app.put("/api/assignments/:mid", async (req, res) => {
    const { mid } = req.params;
    // const assignmentIndex = db.assignments.findIndex(
    //     (m) => m._id === mid);
    // db.assignments[assignmentIndex] = {
    //   ...db.assignments[assignmentIndex],
    //   ...req.body
    // };
    await dao.updateAssignment(mid, req.body);
    res.sendStatus(204);
  });
}