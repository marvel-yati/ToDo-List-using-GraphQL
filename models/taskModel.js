import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    status:{
        type: String,
        required: true,
        enum:["Todo","In Progress","Completed"]
    }
})

mongoose.model("Task",taskSchema)
