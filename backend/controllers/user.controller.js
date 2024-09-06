import asyncHandler from '../utils/asyncHandler.js'
import APIError from '../utils/APIError.js'
import { User } from '../models/users.model.js'
// import uploadToCloudinary from '../utils/clodinary.js'
import APIResponse from '../utils/APIResponse.js'

const generateAccessAndRefreshTokens = async(userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return { accessToken, refreshToken }
    } catch (error) {
        throw new APIError(500,"Something went wrong while generating tokens.")
    }
}

const registerUser = asyncHandler( async (req, res) => {
    // get user details from frontend
    
    const { name, email, mobile, password } = req.body

    // validation -not empty
    if(
        [name, email, mobile, password].some((field) =>
            field?.trim() === ""
        )
    ){
        throw new APIError(400, "All fields marked * are required.")
    }

    // check if user already exist: email

    const existedUser = await User.findOne({
        $or: [{ email }, { mobile }]
    })

    if(existedUser) throw new APIError(409, "User already exist.")

    // ----------- this is for uploading files to Cloudinary(optional) -----------------

    // // check for file or images

    // const avatarLocalPath = req.files?.avatar[0]?.path
    // const coverLocalPath = req.files?.cover[0]?.path

    // if(!avatarLocalPath) throw new APIError(400, "Avatar Image is required.")

    // // upload to cloudinary(optional to my project)

    // const avatar = await uploadToCloudinary(avatarLocalPath)
    // const cover = await uploadToCloudinary(coverLocalPath)

    // if(!avatar) throw new APIError(500, "Avatar file not uploaded successfully.")
    // console.log("Avatar Url: ",avatar.url);

    // cretate user object for mongodb entry
    
    const user = await User.create({
        name,
        email,
        mobile,
        password
    })

    // remove password and refresh token field
    
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    // check user creation

    if(!createdUser) throw new APIError(500, "Somthing went wrong while registering user.")

    // return res

    return res.status(201).json(
        new APIResponse(201, createdUser, "User registered successfully.")
    )
} )

const loginUser = asyncHandler( async (req, res) => {
    // get credentials from
    
    const { email, password} = req.body
    if(!email) throw new APIError(400, "Email is required.")

    // check email and password empty or not
    
    if(
        [email, password].some((field) =>
            field?.trim() === ""
        )
    ){
        throw new APIError(400, "Email or Password fields are required.")
    }    

    // find user

    const user = await User.findOne({ email })
    if(!user) throw new APIError(404, "User not exist.")

    // password check

    const isPasswordValid = await user.isPasswordCorrect(password)
    if(!isPasswordValid) throw new APIError(401, "Invalid User credentials.")

    // generate access and refresh tokens

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id)

    // send cookie

    const cookieOption = {
        httpOnly: true,
        secure: true
    }

    return res.status(200)
    .cookie("accessToken", accessToken, cookieOption)
    .cookie("refreshToken", refreshToken, cookieOption)
    .json(
        new APIResponse(200, {
            user: user.email, accessToken, refreshToken
        },
        "User logged in successfully.")
    )
})

const logoutUser = asyncHandler( async (req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset: {
                refreshToken: 1
            }
        },
        {
            new: true
        }
    )

    const cookieOption = {
        httpOnly: true,
        secure: true
    }

    return res.status(200)
    .clearCookie("accessToken", cookieOption)
    .clearCookie("refreshToken", cookieOption)
    .json(
        new APIResponse(200, {}, "User logged out successfully.")
    )
})

const refreshAccessToken = asyncHandler ( async (req, res) => {
    
})

export { registerUser, loginUser, logoutUser }