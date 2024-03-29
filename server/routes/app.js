import api from "./api.js";
import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const buildPath = path.resolve(__dirname, "..", "..", "client", "dist");
app.use(express.static(buildPath));
function html(req, _, next) {
    if (req.accepts('html')) {
        return next()
    } else {
        return next('route')
    }
}

app.use("/api", api);
app.get("*", html, function (_, res) {
    res.redirect("/");
});

//default 404 route
app.use(function (_, res) {
    res.status(404).json({ error: "Not Found" });
});

export default app;