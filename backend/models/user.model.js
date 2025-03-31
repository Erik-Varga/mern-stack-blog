import mongoose from "mongoose"
import { Schema } from "mongoose"

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        uniquie: true,
    },
    img: {
        type: String,
    },
    savedPosts: {
        type: [String],
        default: [],
    },
}, 
{ timestamps: true });

export default mongoose.model("User", userSchema);