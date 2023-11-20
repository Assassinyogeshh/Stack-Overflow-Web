import express from "express";
import { Login, Register} from "../Controller/auth.js";
import { getAllUser, updateProfile } from "../Controller/Users.js";
import auth from "../Middleware/auth.js";
const router= express.Router()

// router.post('/register', Register)


router.post('/register', Register);

router.post('/login', Login);

router.get('/getAllUsers', getAllUser);

router.patch('/updateProfile/:id', auth, updateProfile)

export default router
