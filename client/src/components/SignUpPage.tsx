import { useAuth } from "../context/AuthenticationContext"
import { Link } from "react-router-dom"


export default function SignUpPage() {

  const {handleRegister} = useAuth()
  return (
  
    <div className='flex justify-center min-h-screen items-center text-2xl bg-custom-image'>
        <form onSubmit={handleRegister} className='flex flex-col border solid border-black p-12 rounded-2xl  bg-cyan-700' action="">
            <h2 className='text-center font-inter'>Welcome to Chatgram.Sign up</h2>
            <label className='my-4' htmlFor="">Username</label>
            <input className = "rounded-xl bg-cyan-800 p-0.5 px-8 focus:outline-none " type="text" id="username" name="username" />
            <label className='my-4' htmlFor="">Email</label>
            <input className = "rounded-xl bg-cyan-800 p-0.5 px-8 focus:outline-none" type="text" id="email" name= "email" />
            <label className='my-4' htmlFor="">Password</label>
            <input className='mb-2 rounded-xl bg-cyan-800 p-0.5 px-8 focus:outline-none' type="password" id="password" name="password" />
            <button className='rounded-xl bg-cyan-950 mt-6 py-2 hover:bg-cyan-600'>Sign up</button>
            <p className="mt-4 text-base text-center">You already have account. <Link className="hover:text-blue-800" to="/login">Login</Link></p>
        </form>
    </div>
  
  )
}
