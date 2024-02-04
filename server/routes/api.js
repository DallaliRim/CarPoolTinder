import { Router } from "express";

const router = Router()

router.get("/sanity", (req, res) => {
  res.json(res.locals);
  //To use this data just fetch this endpoint and then do response.json()
})

// router.post("/get-suitable-users", (req, res) => {
//   const prefs = req.body.user.preferences
//   mongodb.query
//   res.json()
// })



export default router