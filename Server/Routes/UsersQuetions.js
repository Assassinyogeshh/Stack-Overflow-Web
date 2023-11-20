import express from "express"
import { askedQuetions, getAllQuetions, deleteQuetion, voteQuestions } from "../Controller/Quetions.js";
import auth from "../Middleware/auth.js";

const router=express.Router();

// here we use auth middleware to first confirmin if its really the user here 

router.post('/Ask', auth, askedQuetions);

router.get('/fetchAllQuestions', getAllQuetions);

router.delete('/delete/:id', auth, deleteQuetion);

router.patch('/vote/:id', auth, voteQuestions);


export default router;
