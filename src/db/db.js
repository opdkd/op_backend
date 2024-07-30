import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";


const dbConection = async () => {
    try {
        const mongooseConRes = await mongoose.connect(`mongodb+srv://op:op@cluster0.glt1pup.mongodb.net/${DB_NAME}`);
        console.log("MongoDB connected: ", mongooseConRes.connection.port);
        return "ramaiya agalcha success";
    } catch (error) {
        console.log("Error:- ", error);
        // throw error
        process.exit(1);
             
    }
}
export default dbConection
