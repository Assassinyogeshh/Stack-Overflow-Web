import mongoose from "mongoose";


const UserSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    about: { type: String },
    tags: { type: [String] },
    joinedOn: { type: Date, default: Date.now },
});

const user= mongoose.model('stackUser', UserSchema);

export default user

