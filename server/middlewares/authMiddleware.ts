import { UserRequest } from "../controllers/messageContollers"
import { Response, NextFunction } from "express"
import jwt = require("jsonwebtoken")
import dotenv from 'dotenv'
import { UserModel } from "../models/User"
import { userType } from "../types"


dotenv.config()

const authMiddleware = async(req:UserRequest,res:Response, next:NextFunction ) =>{
    const {authorization} = req.headers

    if(!authorization) {
        return res.status(401).json({error:"There are no user"})
    }

    const token = authorization.split(" ")[1]

    const jwt_secret:any = process.env.JWT_SECRET

    try{
        const {_id}:any = jwt.verify(token, jwt_secret);

        const user = await UserModel.findById(_id).exec()

        req.user = user
        next()
    }
    catch(error){
        console.log(error)
        res.json({error:error})
    }
}