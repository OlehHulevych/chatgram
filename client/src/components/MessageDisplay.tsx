
import Layout from './Layout'
import MessageItem from './MessageItem';

import { useChat } from '../context/ChatContext'

export default function MessageDisplay() {
  const {selectedChat, messagesOfChat} = useChat();
  return (
    <Layout>
      <div className='w-3/4  h-[740px] overflow-hidden  '>
        {selectedChat?(
           <div>
              <header className='w-full p-2  bg-cyan-700  items-center pt-4'>
                <div>Someuser user</div>
              </header>
              <main className=' pt-4   w-full h-5/6 min-h-[636px]  pr-2  justify-end  bg-cyan-800  flex grow flex-col '>
                <div className='overflow-y-auto relative'>
                 {messagesOfChat?.map((message:any) => 
                
                    (
                    <MessageItem key={message._id} username={message.sender.username} text={message.text} />
                   
                  )
              
                 
                 )}
                </div>
              </main>
              <footer className='h-[10%] bg-cyan-700 p-2 pt-4   '>
                <input className='w-full rounded-xl bg-cyan-950 text-white p-1 focus:outline-none focus:border-none pl-2' type="text" placeholder='Type text' />
              </footer>
           </div>
        ):(<div className='w-full min-h-screen bg-cyan-700 flex justify-center items-center '>
          <h1 className='text-white text-3xl font-inter font-bold'>Please select the chat</h1>
        </div>)}
       
      </div>
    </Layout>
  )
}
