import React, { useRef, useState } from 'react'
import Header from './Header.js'
import checkValidate from './Validate.js'

const Login = () => {

    const [isSignInForm, setIsSignInForm]  = useState(true)
    const [ErrorMsg, setErrorMsg] =useState(null)

    const toggleChange=()=>{
      setIsSignInForm(!isSignInForm)
    }

      const email= useRef(null)
      const password = useRef(null)
      const name  = useRef(null)

    const HandleSignUp=()=>{

     const message =  checkValidate(email.current.value,password.current.value,name.current.value)
      // console.log(email.current.value)
      // console.log(password.current.value)
      setErrorMsg(message)
      console.log(ErrorMsg)

    }
 
  return (
    <div className=' w-full h-full' >
     <Header/>
     
     <div className="w-full h-full absolute z-10 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_small.jpg')] ">
        {/* <img className='h-full w-full' src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="background_preview" /> */}
    
        <div className='absolute text-white z-20 h-full w-full '>
   <form onSubmit={(e)=>e.preventDefault()} className='w-[450px] bg-black  mx-auto my-[150px] p-10 px-16 rounded-xl bg-opacity-80 '>
        <h1 className='font-semibold text-2xl my-4'>{(!isSignInForm) ? "Sign Up" :"Sign In"}</h1>
          {
            (!isSignInForm) && <input ref={name} className='w-full p-2 mb-2 text-white rounded-sm bg-gray-700' type='text' placeholder='Full Name'/> 
          }

        <input ref={email} className='w-full p-2 mb-2 text-white rounded-sm bg-gray-700' type='text' placeholder='Email Address'/>
        <input ref={password} className='w-full p-2 mb-2 text-white rounded-sm bg-gray-700' type='password' placeholder='Password'/>
        <div className='w-full p-2 mb-10'>
          {
            ErrorMsg
          }
        </div>
        <button onClick={HandleSignUp}  className=' p-2  w-full mb-1  bg-red-700 border-none text-white border border-spacing-2'> {!isSignInForm? "Sign Up" :"Sign In" }</button>
        <div className='flex gap-[100px]'>
          <div><input type="checkbox" id='bottombox'/><label htmlFor="bottombox" className='text-gray-200'> Remember me</label></div>
          <p>Need help?</p>
        </div>
        <div className="signup-text mt-12 flex gap-2">
          <p className='text-[16px] text-gray-300 cursor-pointer'>New to Netflix? <span className='font-bold text-lg' onClick={toggleChange}>Sign Up now</span></p>
        </div>
        
    </form>
   </div>
     </div>


   </div>

   
  )
}

export default Login
