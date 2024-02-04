import express from 'express';
import User from "../database/User.js"

export const userRouter = express.Router();

userRouter.get("/", async (req, res, next) => {
    let query = getUriParams(req.query);
    const total = await User.countDocuments(query);
    const user = await User.findOne(query).skip(0).lean();
    if (user === null) {
        res.json({ body: await getRandomUser() });
        return;
    }
    res.json({ body: user.user });
});

userRouter.post("/user", async (req, res, next) => {
    const email = req.session.email;
    if (!email) {
        next(new createHttpError.BadRequest(
            "Can't find or create the user because no email was provided"
        ));
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
            next(new createHttpError.BadRequest({
                message: "values do not comply with user schema",
                error: error.message
            }));
            return;
        }
    }
    const cleanUser = user.toObject();
    delete cleanUser.email;
    res.json({
        ...cleanUser
    });
});