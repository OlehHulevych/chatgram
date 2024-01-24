import { Chat, chatModel } from "../models/Chat"
import { UserModel } from "../models/User";

export const accessChat = async(req:any,res:any)=>{
    try{
        const {userId} = req.body;
    console.log(req.user)
        

    let isChat = await chatModel.find({
        users:{
            $all:[req.user._id, userId ]
        }
    })
    .populate('users', '-password')
    .populate('latestMessage')

    isChat = await UserModel.populate(isChat, {
        path:"latestMessage.sender",
        select:"username email"
    })

    
    console.log("Hello")
    

    
    
    if(isChat.length>0){
        
        return res.json({chat:isChat[0]})
        
    }
    else{
        const createdChat= await chatModel.create({
            chatName:"Sender",
            users:[req.user._id, userId]
        })
        console.log("Hello")

        const fullChat =  await chatModel.findOne({_id:createdChat._id}).populate('users', '-password')
        .populate('latestMessage')
        return res.json({chat:fullChat})
    }

    }

    catch(error){
        console.log(error)
        return res.json({error:error})
        
    }
    

    
    
       
}


export const fetchChats  = async(req:any, res:any)=>{
    try{
        const userChats = await chatModel.find({users:{$elemMatch:{$eq:req.user._id}}})
    .populate('users', '-password')
    .populate('latestMessage')
    .sort({updatedAt:-1});

    return res.json({userChats:userChats})

    }
    catch(error){
        console.log(error)
        return res.json({error:error})
    }
    
}