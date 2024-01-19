import { Request, Response } from "express"
import { Message, MessageModel } from "../models/Message"
import { UserModel, User } from "../models/User"
import { chatModel } from "../models/Chat"
import { userType } from "../types"
import { Document } from "mongoose"



export interface UserRequest extends Request{
    user:Document<User>
}

export const getMessage = async (req:Request,res:Response) =>{
    try{
        const messages = await MessageModel.find({chat:req.params.chatid})
        .populate('sender', 'username')
        .populate('chat') 

        return res.json(messages)
    }
    catch(error){
        console.log(error)
        res.status(400)
    }
}


export const sendMessage = async (req:UserRequest, res:Response) =>{
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