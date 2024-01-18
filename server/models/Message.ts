import { Document, Schema, model, Types } from "mongoose";

interface Message {
    sender:Types.ObjectId,
    receiver:Types.ObjectId,
    chat:Types.ObjectId
    text:string,
    timestamp:Date
}

const messageSchema = new Schema<Message & Document>({
    sender:{type:Schema.Types.ObjectId, ref:'User', required:true},
    receiver:{type:Schema.Types.ObjectId, ref:'User'},
    text:{type:String,required:true},
    chat:{
        type:Schema.Types.ObjectId,
        ref:'Chat'
    },
    timestamp:{type:Date, default:Date.now}
})

const MessageModel = model <Message & Document>('Message', messageSchema)

export {MessageModel, Message}