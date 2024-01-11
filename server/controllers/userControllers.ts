import { User, UserModel } from "../models/User";
import { Request,Response } from "express";
import bcrypt from 'bcrypt'
import jwt = require('jsonwebtoken') 
import dotenv from 'dotenv'


dotenv.config()
const expiresInTime = 3*24*60*60
const jwt_secret:any = process.env.JWT_SECRET; 




export const registerUserController = async (req:Request, res:Response)=>{ 
        const {email,username,password} = req.body;
    const passwrodBcrypted = await bcrypt.hash(password, 10);
    console.log(req.body)
    const newUser = new UserModel({
        username:username,
        password:passwrodBcrypted,
        email:email
    })
    await newUser.save()
    .then(()=>{
        const token = jwt.sign({id:newUser._id},jwt_secret, {expiresIn:expiresInTime} )
        return res.json({message:"The user was registered successfull", token:token});
    })
    .catch((error)=>{
        return res.json({messageError:`There are error:${error}`})
    })
}

export const loginController = async (req:Request,res:Response)=>{
    const {email, password} = req.body;
    const foundUser:any = await UserModel.findOne({email})
    console.log(foundUser)
    if(!foundUser){
        return res.json({messageError:"The user was not found"})
    }

    const isMatch = await bcrypt.compare(password, foundUser.password )
    
    if(isMatch){
        const token = jwt.sign({id:foundUser._id}, jwt_secret, {expiresIn:expiresInTime})
        return res.json({message:"The login was succsefully", token:token})
    }
    else{
        res.json({passwordError:"The password is valid"})
    }
}   