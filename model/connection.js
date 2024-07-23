import mongoose from "mongoose";
const url = "mongodb://127.0.0.1:27017/book"
mongoose.connect(url);
console.log("Mongodb connected");
