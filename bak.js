import express from "express";
import session from "express-session";
import cors from "cors";
import "dotenv/config";
import UserRoutes from "./Kanbas/Users/routes.js";

const app = express();

app.use(
    cors({
        credentials: true,
        origin: process.env.FRONTEND_URL || "http://localhost:3000"
    })
);

app.use(
    session({
        secret: process.env.SESSION_SECRET || "your_secret_key",
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            maxAge: 24 * 60 * 60 * 1000, // 24 hours
        }
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", UserRoutes);

app.get("/api/test-session", (req, res) => {
    if (req.session) {
        res.json({ message: "Session is working", session: req.session });
    } else {
        res.status(500).json({ message: "Session is not configured properly" });
    }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});