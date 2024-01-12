
import { IoIosCog } from "react-icons/io";
import { IoIosMoon } from "react-icons/io";
import { useBarContext} from '../context/BarContext';
import { useMainContext } from "../context/MainContext"; 
import { useAuth } from "../context/AuthenticationContext";
import { useEffect } from "react";
import LoadingComponent from "./LoadingComponent";



export default function MenuBar() {
  const {handleAuthentication, user} = useAuth();
  const openBar = useBarContext()
  const {openerMenuAccount} = useMainContext()

  useEffect(()=>{
    handleAuthentication()
  })
  return (
    <div  className={`${openBar?'scale-100':'scale-0'} transform absolute w-full bg-black min-h-screen bg-opacity-70`}>
        <div className={` ${openBar? 'left-0':'left-[-100%]'} absolute transition-all duration-500 ease-in-out abosolute w-1/4 min-h-screen   bg-cyan-700 pb-6 pt-3`}>        
        <header className='flex h-8  pl-2 ml-10'>
            
            <img src="https://via.placeholder.com/40x40" alt="" className='rounded-full' />
            <div className='ml-2 text-white font-bold text-2xl '>{user?user.username:<LoadingComponent/>}</div>
        </header>
        <div className='pt-6 w-full  flex flex-col justify-around'>
            <ul>
                <li onClick={openerMenuAccount} className='flex text-xl w-full font-bold mb-4 text-white hover:bg-cyan-600 px-2 cursor-pointer'>
                  <IoIosCog className = "text-3xl mr-2"/>
                  Change Account
                  </li>
                <li className='flex text-xl w-full font-bold mb-4 text-white hover:bg-cyan-600 px-2 cursor-pointer'>
                  <IoIosMoon className = "text-3xl mr-2"/>
                  Dark mode
                  </li>
            </ul>
        </div>
        </div>
    </div>
  )
}
