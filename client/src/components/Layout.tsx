import  { ReactNode } from 'react'
import UserBar from './UserBar';
import MainContext from '../context/MainContext';


interface Props  {
    children?:ReactNode;
}

export default function Layout({children}:Props) {


  return (
    <MainContext>
    <div className = "w-100 flex justify-between">
        <UserBar/>
        {children}
    </div>
    </MainContext>
  )
}
