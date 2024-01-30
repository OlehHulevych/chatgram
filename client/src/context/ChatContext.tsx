/* eslint-disable react-refresh/only-export-components */
import { useContext, createContext, useState, ReactNode, useEffect } from "react";
import axios from "axios";
import React from 'react'





interface ContextType {
    selectedChat:string,
    setSelectedChat:(id:string)=>void,
    messagesOfChat:any[],
    fetchingMessage:(chatId:string)=>void,
    chats:unknown[],
    fetchingChats:()=>void,
    accessChat:(userId:string)=>void

}



interface ComponentsProps {
    children?:ReactNode
}

const ChatContextProvider =  createContext<ContextType | undefined>(undefined)



export default function ChatContext({children}:ComponentsProps) {
    const [selectedChat, setSelectedChat] = useState<string>('')
    const [chats, setChats] = useState([]);

    const [messagesOfChat, setMessagesChat] = useState([])


    useEffect(()=>{
        fetchingMessage(selectedChat)
        console.log("The messages are fetching")
    }, [selectedChat])
    

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
        try{
            if(!chatId){
                const res =  await axios.get(`http://localhost:5000/message/get/${chatId}`);
               
                const messages = res.data.messages;
                setMessagesChat(messages)
            }
            else{
                console.log("No messages yet")
            }
            
        }
        catch(error){
            console.log("Something went wrong.There are error: "+error)
        }
       

       
    }

    const handleSelectedChat = (id:string)=>{
        setSelectedChat(id);
        console.log(id)
    }

    const accessChat = async(userId:string) =>{
        try{
            const response = await axios.post('http://localhost:5000/chat/access',{userId}, {
                headers:{
                    'Authorization':`Bearer ${localStorage.getItem('token')}`,
                    'Content-Type':'application/json'
                }
            })

            const chat = response.data.chat

            setSelectedChat(chat._id);
            
            
        }
        catch(error){
            console.log(error)
        }
      
        
    }

    
    const contextValue:ContextType = {
        selectedChat:selectedChat,
        setSelectedChat:handleSelectedChat,
        messagesOfChat:messagesOfChat,
        fetchingMessage,
        chats:chats,
        fetchingChats:fetchingChats,
        accessChat:accessChat
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





