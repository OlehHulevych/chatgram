import React ,{createContext, ReactNode, useState, useContext} from 'react'
import axios from 'axios'

interface AuthenticationContextProps{
    children:ReactNode
}



interface contextValueTypes{
    handleLogin:(event:React.MouseEvent<HTMLButtonElement>, email:string, password:string)=>void,
    handleRegister:(event:React.MouseEvent<HTMLButtonElement>, email:string, password:string, username:string)=>void,
    isAuhtenticated:boolean,
    setIsAuthenticated:()=>void
    username:string,
    setUsername:(value:string)=>void
    
}

const AuthenticationContextProvider = createContext<contextValueTypes | undefined>(undefined)

export default function AuthenticationContext({children}:AuthenticationContextProps) {

    const [username, setUsername] = useState<string>("")
    const [isAuhtenticated, setIsAuthenticated] = useState<boolean>(false)

   const handleLogin = async (event:React.MouseEvent<HTMLButtonElement>, email:string, password:string)=>{
    event.preventDefault();
    try{
        const response = await axios.post('http://localhost:5000/login', {email, password})
    localStorage.setItem('token', response.data.token)
    }
    catch(error){
        console.log("There are error:"+error)
    }
    

   }

   const handleRegister = async(event:React.MouseEvent<HTMLButtonElement>, email:string, password:string, username:string) =>{
    event.preventDefault();
    try{
        const response = await axios.post('http://localhost:5000/register', {email, password, username})
        localStorage.setItem('token', response.data.token)

    }
    catch(error){
        console.log("There are error: "+error)
    }
    
   }

   const contextValue:contextValueTypes = {
    handleLogin:handleLogin,
    handleRegister:handleRegister,
    isAuhtenticated:isAuhtenticated,
    setIsAuthenticated:()=>setIsAuthenticated(!isAuhtenticated),
    setUsername:(value:string)=>setUsername(value),
    username:username
    
   }

    

  return (
    <AuthenticationContextProvider.Provider value ={contextValue} >
        {children}
    </AuthenticationContextProvider.Provider>
  )
}

export const useAuth = ()=>{
    const context = useContext(AuthenticationContextProvider)
    if(!context){
        throw new Error("The useAuth must be used within AuhtenticationContextProvider")
    }
    return context 
}
