import { UserRequest } from "../controllers/messageContollers"
import { Response, NextFunction } from "express"
import jwt = require("jsonwebtoken")
import dotenv from 'dotenv'
import { User, UserModel } from "../models/User"
import { userType } from "../types"
import { Document } from "mongoose"


dotenv.config()

export const authMiddleware = async(req:any,res:Response, next:NextFunction ) =>{
    const {Authorization}:any = req.headers

    if(!Authorization) {
        return res.status(401).json({error:"There are no user"})
    }

    const token = Authorization.split(" ")[1]

    const jwt_secret:any = process.env.JWT_SECRET

    try{
        const {_id}:any = jwt.verify(token, jwt_secret);

        const user:any= await UserModel.findById(_id).exec()

        req.user = user 
        next()
    }
    catch(error){
        console.log(error)
        res.json({error:error})
    }
}