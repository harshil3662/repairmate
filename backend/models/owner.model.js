import mongoose, {Schema} from "mongoose";

const ownerSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        index: true,
        unique: true,
        trim: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String
    }
},{timestamps: true})

export const Owner = mongoose.model("Owner",ownerSchema)