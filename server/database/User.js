import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, required: true },
    firstname: { type: String, default: "empty" },
    lastname: { type: String, default: "empty" },
    "picture_url": { type: String, required: true },
    email: { type: String, required: true },
}, {
    methods: {
    }
});

const User = mongoose.model("users", UserSchema);
export default User;