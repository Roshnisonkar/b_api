import mongoose from "mongoose";
import UniqueValidator from "mongoose-unique-validator";


const BookSchema = mongoose.Schema({
    _id:Number,

    bookName:{
        type:String,
        trim:true,
    },
    author:{
        type:String,
        trim:true,
    },
    description:{
        type:String,
        trim:true,
    },
    image:{
        type: String,
        trim: true
    },
    price:{
        type:Number,
        trim:true,
    },
info:String
    
});

BookSchema.plugin(UniqueValidator);

const BookSchemaModel = mongoose.model("Book",BookSchema);

export default BookSchemaModel;

