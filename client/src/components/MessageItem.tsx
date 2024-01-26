

interface MessageProps {
  username:string,
  text:string
}

export default function MessageItem({username, text}:MessageProps) {
  return (
    <div className=' mt-auto mb-6 mr-4 py-0.5 bg-cyan-700 pr-12 pl-4 rounded-xl'>
        <div>{username}</div>
        <div>{text}</div>
    </div>
  )
}
