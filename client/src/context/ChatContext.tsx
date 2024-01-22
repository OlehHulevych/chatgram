import { useContext, createContext, useState, ReactNode } from "react";
import axios from "axios";
import React from 'react'




interface ContextType {
    selectedChat:string|undefined,
    setSelectedChat:(chatId:string|undefined)=>void;
    messagesOfChat:unknown[],
    fetchingMessage:(chatId:string)=>void

}



interface ComponentsProps {
    children?:ReactNode
}

const ChatContextProvider =  createContext<ContextType | undefined>(undefined)



export default function ChatContext({children}:ComponentsProps) {
    const [selectedChat, setSelectedChat] = useState<string | undefined>('')

    const [messagesOfChat, setMessagesChat] = useState([])

    const fetchingMessage = async(chatId:string) =>{
        const res =  await axios.get(`http://localhost:5000/message/get/${chatId}`);
        const messages = res.data.messages;
        setMessagesChat(messages)

       
    }
    const contextValue:ContextType = {
        selectedChat,
        setSelectedChat,
        messagesOfChat,
        fetchingMessage
    } 
  return (
    <ChatContextProvider.Provider value={contextValue}>
        {children}
    </ChatContextProvider.Provider>
  )
}

export const useChat = ()=>{
    const context = useContext(ChatContextProvider)
    if(!context){
        throw new Error("use is useable within chatContextPrvider")
    }
    return context
}





