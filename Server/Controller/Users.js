import mongoose from "mongoose";
import user from "../Model/UserSchema.js";

 
  export const getAllUser=async (req, res)=>{


    try {
        
        const allUser= await user.find()

             const allUserDetails= allUser.map((user)=>({
                _id:user._id,
                        name:user.name,
                        about:user.about,
                        tags:user.tags,
                        joinedOn:user.joinedOn
             }))

             res.status(200).json(allUserDetails)
            
    } catch (error) {
         res.status(500).json({message:error.message})
    }

}

export const updateProfile= async (req,res)=>{

try {

    const {id:_id}=req.params;

    const {name, tags, about}= req.body
    console.log("Request Body:", req.body);
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return  res.status(404).send("User not found")
    }

 const updatedProfile= await user.findByIdAndUpdate(_id,{
        // in json if key or value are same you can directly this way
        $set:{name: name, about: about, tags: tags}},
        {new:true}
    )
    if (!updatedProfile) {
        return res.status(404).send("User not found"); // Use status code 404 for not found
    }
 
    res.status(200).json(updatedProfile)

} catch (error) {
    
 res.status(500).json({message:error.message})


}
     

}