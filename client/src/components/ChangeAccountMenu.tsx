import React from 'react'
import { Link } from 'react-router-dom'
import { useMainContext } from '../context/MainContext'

export default function ChangeAccountMenu() {

  const {openerMenuAccount} = useMainContext();

  


  return (
    <div onClick={openerMenuAccount} className='flex justify-center items-center w-full min-h-screen fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 z-50 '>
      <div className='w-full max-w-[500px] h-[300px]  flex-col flex justify-center bg-cyan-600 rounded-2xl text-center items-center'>
        <Link  className=' py-2 w-3/4 rounded-xl  hover:bg-cyan-400 bg-cyan-700 mb-3 transition-all duration-200 text-xl font-bold text-white '  to='/login'>Log in</Link>
        <Link className=' py-2 w-3/4 rounded-xl  hover:bg-cyan-400 bg-cyan-700 mb-3 transition-all duration-200 text-xl font-bold text-white'  to='/signup'>Sign up</Link>
      </div>
    </div>
  )
}
