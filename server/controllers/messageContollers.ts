import { Request, Response } from "express"
import { Message, MessageModel } from "../models/Message"
import { UserModel, User } from "../models/User"
import { chatModel } from "../models/Chat"
import { userType } from "../types"
import { Document } from "mongoose"



export interface UserRequest extends Request{
    user:Document<User, any>
}

export const getMessage = async (req:any,res:Response) =>{
    const id =  req.params.id || req.query.id;
    try{
       
        console.log("Hello world");
        const messages = await MessageModel.find({chat:id})
        .populate('sender', 'username')
        .populate('chat') 
        return res.json({messages:messages})
    }
    catch(error){
        console.log(error)
        res.status(400).json({error:"Something went wrong"})
    }
}


export const sendMessage = async (req:any, res:Response) =>{
    const {content, chatId} = req.body;
    if(!content || !chatId){
        console.log("Passed invalid information")
        return res.sendStatus(400)
    }

    try{
        let newMessage = await MessageModel.create({
            sender:req.user._id,
            text:content,
            chat:chatId
        })
    
        newMessage = await newMessage.populate("sender", "username email")
    
        newMessage = await newMessage.populate("chat")
    
        await chatModel.findByIdAndUpdate(chatId, {latestMessage:newMessage})
    
        res.json(newMessage)
    

    }

    catch(error){
        res.status(400);
        console.log(error)
        
    
    }

   
  
}