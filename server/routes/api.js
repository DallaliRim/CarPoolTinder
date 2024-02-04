import express from "express";
import { userRouter } from "./users.js";
import mongoose from "mongoose";


const router = express.Router()

router.get("/sanity", (req, res) => {
  res.json(res.locals);
  //To use this data just fetch this endpoint and then do response.json()
})

// router.post("/get-suitable-users", (req, res) => {
//   const prefs = req.body.user.preferences
//   mongodb.query
//   res.json()
// })
router.use(dbConnected);

function dbConnected(_, __, next) {
  if (mongoose.connection.readyState !== 1) {
    if (!process.env.ATLAS_URI) {
      console.error("Trying to reconnect to the db but there is no atlas uri");
      return;
    }
    mongoose.connect(process.env.ATLAS_URI, { dbName: "users" })
      .catch(() => { });
    return;
  }
  next();
}

router.use(express.json());
router.use(userRouter);

export default router