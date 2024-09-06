import { Router } from 'express'
import { registerUser, loginUser, logoutUser } from '../controllers/user.controller.js'
// import { upload } from "../middleware/multer.js"
import { verifyJWT } from '../middleware/authentication.js'

const router = Router()

// ----------- this route is for uploading files to user profile(optional) -----------------

// router.route('/register').post(upload.fields([
//     {
//         name: "avatar",
//         maxCount: 1
//     },
//     {
//         name: "cover",
//         maxCount: 1
//     }
// ]),registerUser)

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)

// secured routes 
router.route('/logout').post(verifyJWT, logoutUser)
router.route('/refreshToken').get()

export default router