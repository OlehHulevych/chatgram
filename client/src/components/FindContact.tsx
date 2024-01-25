/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {ChangeEvent, useEffect, useState} from 'react'
import Contact from './FindContactComponent';
import axios from 'axios';
import { useMainContext } from '../context/MainContext';

export default function FindContact() {
    const [search, setSearch] = useState<string>()
    const [result, setResult] = useState<any[]>([]);
    const {toggleFindContact, openFindContact} = useMainContext()

    const findHandler = async()=>{
      const response = await axios.get(`http://localhost:5000/searchUser?search=${search}`)
      const data = response.data.users;
      setResult(data)
    }

    const stopPropagation = (e:React.MouseEvent)=>{
      e.stopPropagation()
    }


    useEffect(()=>{
      findHandler()
    }, [search]);

    
  return (
    <div onClick={()=>toggleFindContact()} className={`${openFindContact?'scale-100':'scale-0'} trasform fixed w-full min-h-screen top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 z-50 items-center flex justify-center`}>
        <div onClick={stopPropagation} className={`${openFindContact?'scale-100':'scale-0'} transform  ease-in-out transition-all duration-650 w-full max-w-[800px] h-[500px] relative  bg-cyan-600 rounded-2xl my-0 mx-auto p-4`}>
            <div className='text-white text-xl'>Type nickname:</div>
            <input type="text" value={search} className='w-full p-2 rounded-xl mt-2' onChange={(e:ChangeEvent<HTMLInputElement>)=>setSearch(e.target.value)} />
            <div className='flex p-2 flex-col'>
                {result.map((user)=>(
                  <Contact username={user.username} id={user._id}/>
                ))}
            </div>
        </div>
    </div>
  )
}
