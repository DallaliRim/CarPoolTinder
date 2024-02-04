import express from 'express';
import User from "../database/user.js"

export const userRouter = express.Router();

userRouter.post("/suitable-users", async (req, res, next) => {
    // let query = req.query;
    const user = await User.find();
    if (user === null) {
        res.json({ body: { user: user } });
        return;
    }
    res.json({ body: user });
});

userRouter.post("/users", async (req, res, next) => {
    console.log(req.body)
    const email = req.email;
    if (!email) {
        return;
    }
    let user = await User.findOne({ email: email });
    // Create the user.
    if (user === null) {
        const username = req.body.username;
        const picture_url = req.body.picture_url;

        user = new User({
            username,
            picture_url,
            email,
        });
        try {
            await user.save();
        } catch (error) {
        }
    }
    const cleanUser = user.toObject();
    delete cleanUser.email;
    res.json({
        ...cleanUser
    });
});
