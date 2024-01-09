
import Contact from './Contact'
import Burger from './Burger'
import MenuBar from './MenuBar'
import BarContext from '../context/BarContext'
import { useMainContext } from '../context/MainContext'

export default function UserBar() {

  


  return (
    <BarContext>
    <div className='w-1/4 min-h-screen font-inter text-2xl bg-cyan-600  pt-2 relative  '>
      <div className='px-2 flex items-center'>
        <Burger/>
        <input className='rounded-xl p-1 pl-1.5 text-lg w-100 w-5/6 mb-2 ' type="text" placeholder='Search' />
      </div>
        <h2 className='text-lg pl-2'>Contacts:</h2>
        <div className='pt-4'>
          <Contact/>
          
        </div>
    </div>
    <MenuBar/>
    </BarContext>
   
    
  )
}
