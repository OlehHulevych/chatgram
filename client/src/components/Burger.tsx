import { useBarUpdateContext } from "../context/BarContext"

export default function Burger() {
  const toggleBar = useBarUpdateContext()
  return (
    <div onClick={toggleBar} className='flex flex-col mr-4 cursor-pointer relative z-50'>
        <div className='block h-[3px] w-[20px] bg-white mb-1'></div>
        <div className='block h-[3px] w-[20px] bg-white mb-1'></div>
        <div className='block h-[3px] w-[20px] bg-white mb-1'></div>
    </div>
  )
}
