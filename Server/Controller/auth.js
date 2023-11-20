import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

import user from '../Model/UserSchema.js'

dotenv.config({ path: 'config.env' })

export const Register = async (req, res) => {

    const { name, email, password, cpassword } = req.body;
    try {

        if (!name || !email || !password || !cpassword) {
            return res.status(404).json({ message1: 'Please fill the required data' })
        }

        const Finduser = await user.findOne({ email });


        if (Finduser) {
            console.log('Response data sent:', { message1: 'User already exists' });
            return res.status(409).json({ message1: 'User already Exist' })
        }

        if (password !== cpassword) {
            return res.status(400).json({ message2: 'password didnt match with confirm password ' })
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const stackUser = await user.create({ name, email, password: hashedPassword, cpassword: hashedPassword })

        const token = jwt.sign({ email: stackUser.email, id: stackUser._id }, process.env.SECRET_KEY, { expiresIn: "2h" })
        res.cookie('token', token, { httpOnly: true });

        res.status(200).json({ result:'register successful', stackUser, token });

        // res.status(200).json({ result: "successfully Logged in" });
    }
    catch (error) {
        res.status(500).json("Internal Error...");
    }

}

export const Login = async (req, res) => {
    const { email, password } = req.body;
    try {

        const stackUser = await user.findOne({email})

        if (!stackUser) {
            // res.status(404).json({ message: "Invalid Credentials" })
            res.status(404).json({ message: "Invalid credentials" });

        }

        const checkPassword = await bcrypt.compare(password, stackUser.password)

        if (!checkPassword) {
            // res.status(404).josn({ message: "Invalid credentials" })
            res.status(404).json({ message: "Invalid credentials" });
                 alert('Invalid Credentials')
        }


        const token = jwt.sign({ email: stackUser.email, id: stackUser._id }, process.env.SECRET_KEY, { expiresIn: "2h" })
        res.cookie('token', token, { httpOnly: true });


        res.status(200).json({ result: "successfully Logged in", stackUser, token });
    }
    catch (error) {
        res.status(500).json("Something went Wrong Internally ...")
        console.log(error);
    }

}