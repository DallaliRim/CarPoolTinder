import dotenv from "dotenv";
import express from "express";
import http from "http";
import api from "./routes/api.js";
import path from "path";
import { auth } from "express-openid-connect";
import cors from "cors";
import fs from "fs"


dotenv.config();

const app = express();

const port = process.env.PORT || 3000

//Auth0 setup stuff
const config = {
  authRequired: false,
  auth0Logout: true
};

if (!config.baseURL && !process.env.BASE_URL && process.env.PORT && process.env.NODE_ENV !== 'production') {
  config.baseURL = `http://localhost:${port}`;
}

app.use(cors({ origin: "*" }));

//Logger (remove before submission?)
app.use((request, response, next) => {
  console.log(`New HTTP request: ${request.method} ${request.url}`);
  next();
});

app.use(auth(config));

// Middleware to make the `user` object available for all views
app.use(function (req, res, next) {
  // console.log(req.oidc.user);
  res.locals.user = req.oidc.user;
  next();
});

//Send the html files
app.use(express.static("../client/dist"));
app.use(express.json());

app.use("/api", api);

app.use((req, res) => {
  res.sendStatus(404);
})

http.createServer(app).listen(port, () => {
  console.log(`Listening on ${config.baseURL}`);
});