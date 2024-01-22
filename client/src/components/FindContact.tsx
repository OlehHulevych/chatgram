import React, {useState} from 'react'
import Contact from './Contact'

export default function FindContact() {
    const [search, setSearch] = useState()

    
  return (
    <div className='fixed w-full min-h-screen top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 z-50 items-center flex justify-center '>
        <div className='transform transition-all duration-650 w-full max-w-[800px] h-[500px] relative  bg-cyan-600 rounded-2xl my-0 mx-auto p-4'>
            <div className='text-white text-xl'>Type nickname:</div>
            <input type="text" value={search} className='w-full p-2 rounded-xl mt-2' />
            <div className='flex p-2 flex-col'>
                <Contact/>
                <Contact/>
                <Contact/>
            </div>
        </div>
    </div>
  )
}
