import { Chat, chatModel } from "../models/Chat"
import { UserModel } from "../models/User";

export const accessChat = async(req:any,res:any)=>{
    const {userId} = req.body;

    let isChat = await chatModel.find({
        users:{
            $all:[req.user._id, userId ]
        }
    })
    .populate('users', '-password')
    .populate('latestMessage').populate('latestMessage.sender')
    

    

    if(isChat.length>0){
        res.json({chat:isChat[0]})
    }
    else{
        const createdChat= await chatModel.create({
            chatName:"Sender",
            users:[req.user._id, userId]
        })

        const fullChat =  chatModel.findOne({_id:createdChat._id})
        return res.json({chat:fullChat})
    }


}