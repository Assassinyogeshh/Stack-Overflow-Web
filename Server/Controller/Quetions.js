import mongoose from "mongoose";
import QuestionsModel from "../Model/QuetionsSchema.js";




export const askedQuetions = async (req, res) => {
    console.log('Received POST request to /Questions/Ask');
    const quetionsPostedData = req.body;

    const userId =req.userId;

    //    By this it will Create new quetion model for user everytime whenever a particular user Post new Quetions
    //    we use Spread Operator because we want to add userId because eveytime the new quetion is created it should have its owner  
    const postQuetions = new QuestionsModel({
        ...quetionsPostedData, userId
    });


    try {
        await postQuetions.save();
        console.log("sucessfully send Question");
        return res.status(200).json("Posted a Question Succesfully");
    } catch (error) {

        console.log(`Question Error: ${error}`);

        return res.status(409).json({message:"Couldn't Post a New Quetions"})
    }

}

export const getAllQuetions = async (req, res) => {
    try {

        const quetionsList = await QuestionsModel.find().sort({ askedOn: -1 })
        return res.status(200).json(quetionsList)
    } catch (error) {
        return res.status(404).json({ message: error.message })
    }

}

export const deleteQuetion = async (req, res) => {
    const { id: _id } = req.params;

    // Checking if the quetion is presnet or is quetion present with useriD    

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json({message:"Quetion Unavailable"})
    }

    try {
       const response= await QuestionsModel.findByIdAndDelete(_id);
        console.log(response);
        return res.status(200).json('Quetion Successfully Deleted...')
    } catch (error) {
        return res.status(404).json({ message: error.message })
    }

}

export const voteQuestions = async (req, res) => {

    const { id: _id } = req.params;
    const { value } = req.body;
    const userId = req.userId;

    // checking if the id for a current question

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json({message:"Question Unavailabel..."})
    }

    try {

        const questionOwner = await QuestionsModel.findById(_id);
        const upVote = questionOwner.upVote.findIndex((id) => id === String(userId))
        const downVote = questionOwner.downVote.findIndex((id )=> id === String(userId))

        if (value === 'upVote') {
            //   here  '-1' indicates that not found


            //here it user click the dislike or downbtn because it found in the arrays
            if (!downVote === -1) // it means the id is found or user already vote

                // NOTE- here to filter out the the userID then inside condition must be true , filter only store true condition
                questionOwner.downVote = questionOwner.downVote.filter(id => id !== String(userId));

            if (upVote === -1) // id is not found it means user didnit give vote in upvote
            {
                questionOwner.upVote.push(userId);
            }
            else {
                questionOwner.upVote = questionOwner.upVote.filter(id => id !== String(userId));
            }
        }

        else if(value === 'downVote'){
            if(!upVote === -1){
                questionOwner.upVote= questionOwner.upVote.filter(id=> id !== String(userId))
            }
            
            if(downVote===-1){
                questionOwner.downVote.push(userId)
            }
            else{
                questionOwner.downVote=questionOwner.downVote.filter(id=> id!==String(userId))
            }
        }
        
        await QuestionsModel.findByIdAndUpdate(_id, questionOwner)
        res.status(200).json({message:"Voted Sucessfully..."})

    } catch (error) {
              console.log(error);
        res.status(404).json({message:"Id Not Found"})
    }



}
