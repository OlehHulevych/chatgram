import { useChat } from "../context/ChatContext"

interface Props {
  username:string,
  id:string
}

export default function Contact({username, id}:Props) {

  const {accessChat} = useChat()
  return (
    <div onClick={()=>accessChat(id)} className='w-full pb-5 relative hover:bg-cyan-500 pl-1 pt-1 cursor-pointer mb-5'>
        <div className = "absolute top-0 left-0 pl-1 pt-1">
            <img src="https://via.placeholder.com/40x40" alt="" className='rounded-full'  />
        </div>
        
        <div className='ml-12'>
            <div className='text-lg'>{username}</div>
        </div> 
    </div>
  )
}
