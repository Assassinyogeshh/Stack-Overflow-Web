import express from "express";
import cors from 'cors';
import UserRouter from './Routes/Users.js'
import dotenv from 'dotenv'
import questionsRoutes from "./Routes/UsersQuetions.js";
import answers from './Routes/Answers.js'
import connectDb from './DB/ConnectDB.js'

dotenv.config({path:'config.env'});
connectDb()

const app = express();
app.use(cors());

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use(express.json());
app.use("/user", UserRouter)
app.use("/Questions", questionsRoutes);
app.use("/answers", answers)

app.use('/', (req,res)=>{
    console.log('hi I am connected to server');
    res.send('finally i am connected to the browser')
   
})



const PORT= process.env.PORT||3000;


app.listen(PORT, '0.0.0.0', (error)=>{
    if(error){
        console.log(`Getting Error:${error}`);
    }
    console.log("i am live");
})




