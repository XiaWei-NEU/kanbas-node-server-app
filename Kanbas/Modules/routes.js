import db from "../Database/index.js";
import * as modulesDao from "./dao.js";
export default function ModuleRoutes(app) {
    app.get("/api/courses/:cid/modules", async (req, res) => {
        const { cid } = req.params;
        const modules = await modulesDao.findModulesForCourse(cid);
        res.json(modules);
    });
    app.post("/api/courses/:cid/modules", async (req, res) => {
        const { cid } = req.params;
        const module = {
            ...req.body,
            course: cid,
            _id: new Date().getTime().toString(),
        };
        const newModule = await modulesDao.createModule(module);
        res.send(newModule);
    });
    app.delete("/api/modules/:mid", async (req, res) => {
        const { mid } = req.params;
        const status = await modulesDao.deleteModule(mid);
        res.send(status);
    });
    app.put("/api/modules/:moduleId", async (req, res) => {
        const { moduleId } = req.params;
        const moduleUpdates = req.body;
        const status = await modulesDao.updateModule(moduleId, moduleUpdates);
        res.send(status);
    });
}