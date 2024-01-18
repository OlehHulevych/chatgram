import React ,{createContext, ReactNode, useState, useContext} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

interface AuthenticationContextProps{
    children:ReactNode
}

interface UserType  {
    username?:string,
    id?:string,
    email?:string,
    password?:string
}






interface contextValueTypes{
    handleLogin:React.FormEventHandler<HTMLFormElement>
    handleRegister:React.FormEventHandler<HTMLFormElement>,
    handleAuthentication:()=>void
    isAuhtenticated:boolean,
    setIsAuthenticated:()=>void,
    logOut:()=>void;
    user:UserType,
    error:string|null
   
    
}

const AuthenticationContextProvider = createContext<contextValueTypes | undefined>(undefined)

export default function AuthenticationContext({children}:AuthenticationContextProps) {
    const navigate = useNavigate();
    const [user, setUser] = useState<UserType>({})
    const [isAuhtenticated, setIsAuthenticated] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

   const handleLogin:React.FormEventHandler<HTMLFormElement> = async (event)=>{
    event.preventDefault();
    try{
        const email = event.currentTarget.email.value
        const password = event.currentTarget.password.value;
        const response = await axios.post('http://localhost:5000/login', {email, password})
        if(response.data.token){
            localStorage.setItem('token', response.data.token)
            console.log(response)
            navigate('/')

        }
        else if(response.data.userError){
            setError(response.data.userError)
        }
        else if(response.data.passwordError){
            setError(response.data.passwordError)
        }
    
    
    
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
        if(response.data.token){
            localStorage.setItem('token', response.data.token)
            navigate('/')
        }    
    }
    catch(error){
        console.log("There are error: "+error)
    }
    
   }

   const handleAuthentication = async () =>{
        try{
            const token = localStorage.getItem('token')
            if(!token){
                navigate('/login')
            }
            else{
                const response = await axios.post('http://localhost:5000/getInfo', { token })
                const gotUser = response.data.user
                setUser(gotUser)
                setIsAuthenticated(true)

            }
        }
        catch(error){
            console.error(error)
        }
       
   }

   const handleLogOut = ()=>{
    localStorage.removeItem('token')
    console.log("The user loged out")
   }

   

   const contextValue:contextValueTypes = {
    handleLogin:handleLogin,
    handleRegister:handleRegister,
    isAuhtenticated:isAuhtenticated,
    handleAuthentication:handleAuthentication,
    setIsAuthenticated:()=>setIsAuthenticated(!isAuhtenticated),
    user:user,
    logOut:handleLogOut,
    error:error
    
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
