import { User, UserModel } from "../models/User";
import { Request,Response } from "express";
import bcrypt from 'bcrypt'
import jwt = require('jsonwebtoken') 
import dotenv from 'dotenv'

dotenv.config()
const expiresInTime = 3*24*60*60
const jwt_secret:any = process.env.JWT_SECRET; 




const registerUserController = async (req:Request, res:Response)=>{
    try{
        const {io, socketId} = req.app.locals;
        const {email,username,password} = req.body;
    const passwrodBcrypted = bcrypt.hash(password, 10);

    const newUser = new UserModel({
        username:username,
        email:email,
        password:passwrodBcrypted,
        socketId:socketId
    })

    

    await newUser.save()

    
    
    const token = jwt.sign({id:newUser._id},jwt_secret, {expiresIn:expiresInTime} )

    return res.json({message:"The user was registered successfll", token:token});
    }
    catch(error){
        return res.json({error:`Something went wrong during the registration.There are error:${error}`, })
    }
    

    
}

const loginController = async (req:Request,res:Response)=>{
    const {email, password} = req.body;
    const foundUser:any = UserModel.find({email})
    if(foundUser){
        if(password == foundUser.password){
            await foundUser.save()
            const token = jwt.sign({id:foundUser._id}, jwt_secret, {expiresIn:expiresInTime})
            return res.json({message:"login was successfull", token:token})
        }
        else{
           return res.json({messageError:"Incorrect password"})
        }
        
    } 
    else{
        return res.json({messgaeError:"The user was not found"})
    }
    
}   