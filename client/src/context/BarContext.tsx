import{ useState, ReactNode, useContext, createContext} from 'react'




interface BarContextProps {
    children:ReactNode;
}



const BarContextValue = createContext(false)
const BarUpdateContext = createContext(()=>{})
  
 

export default function BarContext({children}:BarContextProps) {
    const [openBar, setOpenBar] = useState<boolean>(false)
    const toggleBar = ()=>{
        setOpenBar(!openBar);
        console.log("Hello World")
    }    
  return (
    
      <BarUpdateContext.Provider value={toggleBar}>
        <BarContextValue.Provider value = {openBar}>{children}</BarContextValue.Provider>
      </BarUpdateContext.Provider>
    
  )
}

export const useBarContext = ()=>{
  return useContext(BarContextValue)
  
}

export const useBarUpdateContext = () =>{
  return useContext(BarUpdateContext)
}
