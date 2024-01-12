import React ,{createContext, ReactNode, useState, useContext} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

interface AuthenticationContextProps{
    children:ReactNode
}



interface contextValueTypes{
    handleLogin:React.FormEventHandler<HTMLFormElement>
    handleRegister:React.FormEventHandler<HTMLFormElement>,
    handleAuthentication:()=>void
    isAuhtenticated:boolean,
    setIsAuthenticated:()=>void
    username:string,
    setUsername:(value:string)=>void
    
}

const AuthenticationContextProvider = createContext<contextValueTypes | undefined>(undefined)

export default function AuthenticationContext({children}:AuthenticationContextProps) {
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>("")
    const [isAuhtenticated, setIsAuthenticated] = useState<boolean>(false)

   const handleLogin:React.FormEventHandler<HTMLFormElement> = async (event)=>{
    event.preventDefault();
    try{
        const email = event.currentTarget.email.value
        const password = event.currentTarget.password.value;
        const response = await axios.post('http://localhost:5000/login', {email, password})
    localStorage.setItem('token', response.data.token)
    console.log(response)
    
    navigate('/')
    }
    catch(error){
        console.log("There are error:"+error)
    }
    

   }

   const handleRegister:React.FormEventHandler<HTMLFormElement> = async(event) =>{
    event.preventDefault();
        


    try{
        const email = event.currentTarget.email.value
        const username= event.currentTarget.username.value;
        const password=  event.currentTarget.password.value
        
        const response = await axios.post('http://localhost:5000/register', {email, password, username})
        localStorage.setItem('token', response.data.token)
        
        navigate('/')
        

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

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = ()=>{
    const context = useContext(AuthenticationContextProvider)
    if(!context){
        throw new Error("The useAuth must be used within AuhtenticationContextProvider")
    }
    return context 
}
