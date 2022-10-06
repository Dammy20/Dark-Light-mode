import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from './Context/Themeprovider'

const Login = () => {
    const themeContext = useContext(ThemeContext)
 
    return (
      <main className={themeContext.darkTheme == 'light' ? "darktheme" : "lighttheme"}style={{ height: '100vh' }} >
            <div className=" w-100 h-100 flex justify-center items-center ">
      <div className=' w-2/4 h-96 bg-white shadow mt-28 flex'>
        <div className='div-image w-2/4 h-96 bg-contain'>
       
                    </div>
         <nav className={themeContext.darkTheme == 'light' ? "darktheme" : "lighttheme"}>
        <div className='div-register'>
          <h1 className={themeContext.darkTheme == 'light' ? "text text-2xl font-bold text-center text-white" : "text text-2xl font-bold text-center text-black"}>Sign up</h1>
          <div className='div-col  flex-col flex justify-center items-center w-80 h-64 mt-10  '>
             <input  className={themeContext.darkTheme == 'light' ? 'input1 border-2 outline-none text-white border-l-amber-500 border-r-amber-500 mt-8 w-56 h-12 p-3 bg-black  ' : 'input1 border-2 mt-8 w-56 h-12 p-3 bg-white '} type='text' placeholder='Email Address' />
            <input className={themeContext.darkTheme == 'light' ? 'input1 border-2 outline-none text-white border-l-amber-500 border-r-amber-500 mt-8 w-56 h-12 p-3 bg-black  ' : 'input1 border-2 mt-8 w-56 h-12 p-3 bg-white '} type="password" placeholder='Password' />
           
             <button className='btn1 w-48 p-2 rounded font-bold bg-amber-500 flex justify-center items-center mt-8'>Register</button>
            <h3 className={themeContext.darkTheme == 'light' ? "text-white" : "text-black"}>Don't have an account </h3>
            <Link to={"/"} className={themeContext.darkTheme == 'light' ? "text-white" : "text-black"}>Sign up</Link>
                      

         </div>
         </div>
         </nav>
      </div>
     
     
    </div>
      </main>
     
  )
}

export default Login
