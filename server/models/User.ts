
import mongoose, { Schema, model, Document } from "mongoose";

interface User {
    username:string,
    socketId:string,
    password:string,
    email:string
}

const UserShcema = new Schema <User & Document>({
    username:{
        type:String,
        required:true,
        unique:true,
    },

    
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

const UserModel = model<User & Document>('User', UserShcema)
export {UserModel, User}