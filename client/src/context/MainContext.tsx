import {useState, ReactNode, createContext, useContext} from 'react'

interface MainContextProps {
    children?:ReactNode
}

interface MainContextType {
    openMenuAccount:boolean,
    openerMenuAccount:()=>void,
    toggleFindContact:()=>void,
    openFindContact:boolean
    
}

const MainContextProvider = createContext<MainContextType | undefined>(undefined)



export default function MainContext({children}:MainContextProps) {
    const [openMenuAccount, setOpenMenuAccount] = useState(false);
    const [openFindContact, setOpenFindContact] = useState(false)
    const openerMenuAccount = ()=>{
        setOpenMenuAccount(!openMenuAccount)
        console.log("Hello world")
    }

    const toggleFindContact = () =>{
        setOpenFindContact(!openFindContact)
        console.log("Ukriane")
    }

    const contextValue:MainContextType = {
        openMenuAccount,
        openerMenuAccount,
        openFindContact,
        toggleFindContact
    }
  return (
    <MainContextProvider.Provider value={contextValue}>
        {children}
    </MainContextProvider.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useMainContext = ()=>{
    const context = useContext(MainContextProvider);
    if(!context){
        throw Error("The context should use whithing MainContextProvider")
    }

    return context
}
