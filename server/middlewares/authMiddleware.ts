import { UserRequest } from "../controllers/messageContollers"
import { Response, NextFunction } from "express"
import jwt = require("jsonwebtoken")
import dotenv from 'dotenv'
import { User, UserModel } from "../models/User"
import { userType } from "../types"
import { Document } from "mongoose"
import { decoder } from "../utils/decoder"


dotenv.config()

export const authMiddleware = async(req:any,res:Response, next:NextFunction ) =>{
    const {authorization}:any = req.headers

    if(!authorization) {
        return res.status(401).json({error:"There are no user"})
    }

    const token = authorization.split(" ")[1]

    const jwt_secret:any = process.env.JWT_SECRET

    try{
        const id:any = await decoder(token);

        const user:any= await UserModel.findById(id)

        req.user = user 
        next()
    }
    catch(error){
        console.log(error)
        res.json({error:error})
    }
}