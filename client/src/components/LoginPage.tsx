
export default function LoginPage() {
  return (
    <div  className='flex justify-center min-h-screen items-center text-2xl bg-cover bg-center bg-custom-image '>
        <form className='flex flex-col border solid border-black p-12 rounded-3xl bg-cyan-800' action="">
            <h2 className='text-center font-inter'>Log in</h2>
            <label className='my-4' htmlFor="">Email</label>
            <input className = "rounded-xl bg-cyan-950 p-0.5 px-8 focus:outline-none" type="text" />
            <label className='my-4' htmlFor="">Password</label>
            <input className='mb-2 rounded-xl bg-cyan-950 p-0.5 px-8 focus:outline-none' type="text" />
            <button className='rounded-xl bg-cyan-950 mt-6 py-2 hover:bg-cyan-700'>Log in</button>
        </form>
    </div>
  )
}
