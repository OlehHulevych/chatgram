import { useContext, createContext, useState, ReactNode } from "react";
import axios from "axios";
import React from 'react'




interface ContextType {
    selectedChat:string|undefined,
    setSelectedChat:(chatId:string|undefined)=>void;
    messagesOfChat:unknown[],
    fetchingMessage:(chatId:string)=>void,
    chats:unknown[],
    fetchingChats:()=>void,
    accessChat:()=>void

}



interface ComponentsProps {
    children?:ReactNode
}

const ChatContextProvider =  createContext<ContextType | undefined>(undefined)



export default function ChatContext({children}:ComponentsProps) {
    const [selectedChat, setSelectedChat] = useState<string | undefined>('')
    const [chats, setChats] = useState([]);

    const [messagesOfChat, setMessagesChat] = useState([])

    const fetchingChats = async()=>{
        const response = await axios.get('http://localhost:5000/chat/get', {
            headers:{
                'Authorization':`Bearer ${localStorage.getItem('token')}`,
                'Content-Type':'application/json'
            }
        })

        const userChats =  response.data.userChats;
        setChats(userChats)

    }

    const fetchingMessage = async(chatId:string) =>{
        const res =  await axios.get(`http://localhost:5000/message/get/${chatId}`);
        const messages = res.data.messages;
        setMessagesChat(messages)

       
    }

    const accessChat = async(userId:string) =>{
        try{
            const response = await axios.post('http://localhost:5000/chat/access',{userId})
            console.log(response);
        }
        catch(error){
            console.log(error)
        }
      
        
    }

    
    const contextValue:ContextType = {
        selectedChat,
        setSelectedChat,
        messagesOfChat,
        fetchingMessage,
        chats:chats,
        fetchingChats:fetchingChats
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





