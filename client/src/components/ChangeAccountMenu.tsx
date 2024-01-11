
import { Link } from 'react-router-dom'
import { useMainContext } from '../context/MainContext'
import { IoMdClose } from "react-icons/io";

export default function ChangeAccountMenu() {

  const {openerMenuAccount, openMenuAccount} = useMainContext();


  


  return (
    <div className={` ${openMenuAccount?'scale-100':'scale-0'} flex justify-center items-center w-full min-h-screen fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 z-50 `}>
      <div className={`${openMenuAccount? 'scale-100':'scale-0'} transform transition-all duration-650 w-full max-w-[500px] h-[300px] relative  bg-cyan-600 rounded-2xl `}>
        <IoMdClose onClick = {openerMenuAccount} className="absolute top-5 right-5 w-[25px] h-[25px] cursor-pointer text-white "/>
        <div className='h-full flex-col flex justify-center text-center items-center '>
          <Link  className=' py-2 w-3/4 rounded-xl  hover:bg-cyan-400 bg-cyan-700 mb-3 transition-all duration-200 text-xl font-bold text-white '  to='/login'>Log in</Link>
          <Link className=' py-2 w-3/4 rounded-xl  hover:bg-cyan-400 bg-cyan-700 mb-3 transition-all duration-200 text-xl font-bold text-white'  to='/signup'>Sign up</Link>
        </div>
      </div>
    </div>
  )
}
