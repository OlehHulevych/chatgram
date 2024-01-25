/* eslint-disable @typescript-eslint/no-explicit-any */

import Contact from './Contact'
import Burger from './Burger'
import MenuBar from './MenuBar'
import BarContext from '../context/BarContext'
import ChangeAccountMenu from './ChangeAccountMenu'
import FindContact from './FindContact'
import { useMainContext } from '../context/MainContext'
import { useEffect } from 'react'
import { useChat } from '../context/ChatContext'



export default function UserBar() {


  const {toggleFindContact} = useMainContext()
  const {fetchingChats, chats} = useChat();

  useEffect(()=>{
    fetchingChats()
  })
  
  return (
    <BarContext>
    <div className='w-1/4 min-h-screen font-inter text-2xl bg-cyan-600  pt-2   '>
      <div className='w-full px-0.5 flex items-center justify-between '>
        <Burger/>
        <div onClick={()=>toggleFindContact()} className='text-4xl text-white  cursor-pointer float-right hover:bg-cyan-800 rounded-full px-2 py-0.5'>+</div>
      </div>
        <h2 className='text-lg pl-2'>Contacts:</h2>
        <div className='pt-4'>
          {chats?.map((chat:any)=>(
            <Contact chatName={chat.chatName} key={chat._id} latestMessage={chat.latestMessage} />
          ))}
          
        </div>
    </div>
    
    <MenuBar/>
    <ChangeAccountMenu/>
    <FindContact/>
    </BarContext>
   
    
  )
}
