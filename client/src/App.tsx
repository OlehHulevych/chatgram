
import { Routes, Route } from 'react-router-dom'
import MessageDisplay from './components/MessageDisplay'
import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignUpPage'
import AuthenticationContext from './context/AuthenticationContext'


import './App.css'

function App() {
  return (
    <AuthenticationContext>
      <Routes>
        <Route path="/" element = {<MessageDisplay/>} />
        <Route path="/login" element = {<LoginPage/>}/> 
        <Route path = "/signup" element ={<SignUpPage/>}/>
      </Routes>
    </AuthenticationContext>
  )
}

export default App
