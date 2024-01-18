import { useContext, createContext, useState } from "react";




interface ContextType {
    selectedChat:string,
    setSelectedChat:()=>void;
    messagesOfChat:[],
    fetchingMessage:()=>void

}