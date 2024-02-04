import app from "../server.js";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
const PORT = process.env.PORT || 3000;

function setUp(server) {
    const NODE_ENV = process.env.NODE_ENV || "production";
    const option = NODE_ENV === "development" ?
        { cors: { origin: "http://localhost:3000" } } : undefined;
}

(async () => {
    mongoose.set("strictQuery", true);
    try {
        await mongoose.connect(process.env.ATLAS_URI, { dbName: "carpooltinder" });
    } catch (_) {
        console.log("Couldn't connect to the database");
        console.log(_);
    }
    let server = app.listen(PORT, () => {
        console.log("Server Started on port: http://localhost:" + PORT);
    })

    setUp(server)

})();