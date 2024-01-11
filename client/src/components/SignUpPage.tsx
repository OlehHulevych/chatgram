

export default function SignUpPage() {
  return (
    <div className='flex justify-center min-h-screen items-center text-2xl bg-custom-image'>
        <form className='flex flex-col border solid border-black p-12 rounded-2xl  bg-cyan-700' action="">
            <h2 className='text-center font-inter'>Welcome to Chatgram.Sign up</h2>
            <label className='my-4' htmlFor="">Username</label>
            <input className = "rounded-xl bg-cyan-800 p-0.5 px-8 focus:outline-none " type="text" />
            <label className='my-4' htmlFor="">Email</label>
            <input className = "rounded-xl bg-cyan-800 p-0.5 px-8 focus:outline-none" type="text" />
            <label className='my-4' htmlFor="">Password</label>
            <input className='mb-2 rounded-xl bg-cyan-800 p-0.5 px-8 focus:outline-none' type="text" />
            <button className='rounded-xl bg-cyan-950 mt-6 py-2 hover:bg-cyan-600'>Sign up</button>
        </form>
    </div>
  )
}
