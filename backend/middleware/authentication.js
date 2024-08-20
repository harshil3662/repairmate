import { User } from "../models/users.model.js";
import APIError from "../utils/APIError.js";
import asyncHandler from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config({
    path: '../.env'
})

export const verifyJWT = asyncHandler( async (req, _, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
    
        if(!token) throw new APIError(401, "Unauthorized request.")
    
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
        if(!user) throw new APIError(401, "Invalid Access token.")
    
        req.user = user
        next()
    } catch (error) {
        throw new APIError(401, error?.message || "Invalid Access token.")
    }
})