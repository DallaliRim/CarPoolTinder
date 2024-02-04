import app from "../routes/app.js";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
const PORT = 3000;
const ATLAS_URI = "mongodb+srv://dallalirim1:uNrO33FIgSRiNUpt@carpooltinder.ndabqc4.mongodb.net/"

function setUp(server) {
    const NODE_ENV = process.env.NODE_ENV || "production";
    const option = NODE_ENV === "development" ?
        { cors: { origin: "http://localhost:3000" } } : undefined;
}

(async () => {
    mongoose.set("strictQuery", true);
    try {
        await mongoose.connect(process.env.ATLAS_URI, { dbName: "users" });
    } catch (_) {
        console.log("Couldn't connect to the database");
    }
    let server = app.listen(PORT, () => {
        console.log("Server Started on port: http://localhost:" + PORT);
    })

    setUp(server)

})();