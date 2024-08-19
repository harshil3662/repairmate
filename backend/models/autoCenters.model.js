import mongoose, {Schema} from "mongoose";

const autoCenterSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "Owner",
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    since: {
        type: String,
        trim: true
    },
    service: {
        type: [String]
    },
    experty: {
        type: [String]
    },
    isVerified: {
        type: Boolean,
        required: true,
        default: false
    }
},{timestamps: true})

export const AutoCenter = mongoose.model("AutoCenter",autoCenterSchema)