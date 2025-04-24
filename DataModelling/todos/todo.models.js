import mongoose, { mongo } from "mongoose";

const todoScheme = new mongoose.Schema(
{
    content: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        default: false
    },
    createBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subTodos: [{
        type: moongose.Schema.Types.ObjectId,
        ref: "subTodo",
    },
    ]
},{timestamps: true});

export const Todo = mongoose.model("Todo",todoScheme);