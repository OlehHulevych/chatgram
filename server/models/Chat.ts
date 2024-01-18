
import mongoose, {Types, Document, Schema} from 'mongoose'


interface Chat {
    chatName:string,
    users:[Types.ObjectId],
    latestMessage:Types.ObjectId;
    
} 

const chatSchema = new Schema<Chat | Document>({
    chatName:{
        type:String,
        required:true
    },
    users:[
        {
            type:Schema.Types.ObjectId, ref:"User"
        }
    ],
    latestMessage:{
        type:Schema.Types.ObjectId,
        ref:"Message"
    }
}, {timestamps:true})

const chatModel = mongoose.model("Chat", chatSchema)

export {chatModel, Chat}