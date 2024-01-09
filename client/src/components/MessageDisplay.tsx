import React from 'react'
import Layout from './Layout'
import MessageItem from './MessageItem'

export default function MessageDisplay() {
  return (
    <Layout>
      <div className='w-3/4  h-[740px] overflow-hidden  '>
        <header className='w-full p-2  bg-cyan-700  items-center pt-4'>
          <div>Someuser user</div>
        </header>
        <main className=' pt-4   w-full h-5/6  pr-2 items-end justify-end  bg-cyan-800  flex grow flex-col '>
          <div className='overflow-y-auto'>
            <MessageItem/>
            <MessageItem/>
            <MessageItem/>
            <MessageItem/>
            <MessageItem/>
            <MessageItem/>
            <MessageItem/>
            <MessageItem/>
            <MessageItem/>
            <MessageItem/>
            <MessageItem/>
            <MessageItem/>
            <MessageItem/>
            <MessageItem/>
            <MessageItem/>
            <MessageItem/>
            <MessageItem/>
            <MessageItem/>
            <MessageItem/>
            <MessageItem/>
            <MessageItem/>
          </div>
        </main>
        <footer className='h-[10%] bg-cyan-700 p-2 pt-4   '>
          <input className='w-full rounded-xl bg-cyan-950 text-white p-1 focus:outline-none focus:border-none pl-2' type="text" placeholder='Type text' />
        </footer>
      </div>
    </Layout>
  )
}
