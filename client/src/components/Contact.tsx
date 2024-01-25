

interface contactProps {
  chatName:string,
  
  key:string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  latestMessage?:any,
  
}

export default function Contact({chatName,  latestMessage}:contactProps) {

  
  
  return (
    <div  className='w-full relative hover:bg-cyan-500 pl-1 pt-1 cursor-pointer'>
        <div className = "absolute top-0 left-0 pl-1 pt-1">
            <img src="https://via.placeholder.com/40x40" alt="" className='rounded-full'  />
        </div>
        
        <div className='ml-12'>
            <div className='text-lg'>{chatName}</div>
            <div className='text-base'>{latestMessage? latestMessage:''}</div>
        </div> 
    </div>
  )
}
