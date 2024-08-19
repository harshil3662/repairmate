import asyncHandler from '../utils/asyncHandler.js'
import APIError from '../utils/APIError.js'
import { User } from '../models/users.model.js'
import uploadToCloudinary from '../utils/clodinary.js'
import APIResponse from '../utils/APIResponse.js'

const registerUser = asyncHandler( async (req, res) => {
    // get user details from frontend
    // validation -not empty
    // check if user already exist: email
    // check for file or images
    // upload to cloudinary
    // cretate user object for mongodb entry
    // remove password and refresh token field
    // check user creation
    // return res

    const { name, email, mobile, password } = req.body
    console.log("email: ",email);

    if(
        [name, email, mobile, password].some((field) =>
            field?.trim() === ""
        )
    ){
        throw new APIError(400, "All fields marked * are required.")
    }

    const existedUser = await User.findOne({
        $or: [{ email }, { mobile }]
    })

    if(existedUser) throw new APIError(409, "User already exist.")

    const avatarLocalPath = req.files?.avatar[0]?.path
    const coverLocalPath = req.files?.cover[0]?.path

    if(!avatarLocalPath) throw new APIError(400, "Avatar Image is required.")

    const avatar = await uploadToCloudinary(avatarLocalPath)
    const cover = await uploadToCloudinary(coverLocalPath)

    if(!avatar) throw new APIError(500, "Avatar file not uploaded successfully.")
    console.log("Avatar Url: ",avatar.url);

    const user = await User.create({
        name,
        email,
        mobile,
        password
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createdUser) throw new APIError(500, "Somthing went wrong while registering user.")

    return res.status(201).json(
        new APIResponse(201, createdUser, "User registered successfully.")
    )
} )

export default registerUser