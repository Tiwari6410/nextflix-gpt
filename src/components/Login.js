import React, { useState } from 'react'
import Header from './Header.js'

const Login = () => {

    const [isSignInForm, setIsSignInForm]  = useState(true)

    const toggleChange=()=>{
      setIsSignInForm(!isSignInForm)
    }
 
  return (
    <div className=' w-full h-full ' >
     <Header/>
     
     <div className=" w-full h-full absolute z-10 ">
        <img  src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="background_preview" />
     </div>

   <div className='absolute text-white z-20 h-full w-full'>
   <form className='w-[450px] bg-black  mx-auto my-[150px] p-10 px-16 rounded-l-xl bg-opacity-80 '>
        <h1 className='font-semibold text-2xl my-4'>{(!isSignInForm) ? "Sign Up" :"Sign In"}</h1>
          {
            (!isSignInForm) && <><input className='w-full p-2 mb-2 text-black rounded-sm bg-gray-700' type='text' placeholder='First Name'/> <input className='w-full p-2 mb-2 text-black rounded-sm bg-gray-700' type='text' placeholder='Last Name'/> </>
          }

        <input className='w-full p-2 mb-2 text-black rounded-sm bg-gray-700' type='text' placeholder='Email Address'/>
        <input className='w-full p-2 mb-10 text-black rounded-sm bg-gray-700' type='password' placeholder='Password'/>
        <button  className=' p-2  w-full mb-1  bg-red-700 border-none text-white border border-spacing-2'> {!isSignInForm? "Sign Up" :"Sign In" }</button>
        <div className='flex gap-[100px]'>
          <div><input type="checkbox" id='bottombox'/><label htmlFor="bottombox" className='text-gray-200'> Remember me</label></div>
          <p>Need help?</p>
        </div>
        <div className="signup-text mt-12 flex gap-2">
          <p className='text-[16px] text-gray-300 cursor-pointer'>New to Netflix? <span className='font-bold text-lg' onClick={toggleChange}>Sign Up now</span></p>
          {/* <p className='text-xl font-bold items-center'><link rel="stylesheet" href="#" /> Sign Up now</p> */}
        </div>
        
    </form>
   </div>
   </div>

   
  )
}

export default Login
