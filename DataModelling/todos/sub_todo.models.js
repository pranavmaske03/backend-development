import mongoose from "mongoose";

const subTodoScheme = new mongoose.Schema(
{
    content: {
        type: String,
        required:true,
    },
    conplete: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
},{timestamps: true});

export const subTodo = mongoose.model("subTodo",subTodoScheme);
