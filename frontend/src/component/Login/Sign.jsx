import React, { useState } from 'react'
import './LoginPage.css';
import Otp from './otp.jsx' ;
import axios from 'axios';
import LoginPage from  './LoginPage.jsx';

const Sign = () => {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [rpassword,setRpassword]=useState('');
    const [email,setEmail]=useState('');
    const [message,setMessage]=useState('');
    const [otp,setOtp]=useState('');
    const [flag,setFlag]=useState(false);
    const [flag1,setFlag1]=useState(false);
    const handleSignup=async (e) => {
      e.preventDefault();
      if(password==rpassword){
      try {
        const response = await axios.post('http://localhost:5000/api/send-otp', { username, password ,email});
        setFlag(true);
        setMessage(response.data.message); 
        
      } catch (error) {
        setMessage(error.response.data.message); 
      }}
      else{
        setMessage('Password are not matching ');
      }
    };
    const handleSignu = async ({ username, password, email, otp }) => {

      try {
        const response = await axios.post('http://localhost:5000/api/signup', { username, password, email, otp });
        alert("Signup completed");
        setMessage(response.data.message);
        setFlag1(true);

      } catch (error) {
        setMessage(error.response.data.message);
      }
      
    };
    
  return (
    flag==false?
    (<div className='login-page'>
       <div className='login-container'>
           <h2>Sign Up</h2>
             <form onSubmit={handleSignup}>
               <input
                type='text'
                value={username}
                placeholder='Username'
                onChange={(e)=>setUsername(e.target.value)}
               >
               </input>
               <input
               type='password'
               placeholder='Password'
               value={password}
               onChange={(e)=>setPassword(e.target.value)}
               />
               <input
               type='password'
               placeholder='Confirm password'
               value={rpassword}
               onChange={(e)=>setRpassword(e.target.value)}
               />
               <input
               type='text'
               placeholder='E-Mail'
               value={email}
               onChange={(e)=>setEmail(e.target.value)}
               />               <button className='Login-button'
               type='submit'
               >
                Sign Up
               </button>
               </form>
             <p className='login-page-text'>{message} </p>
       </div>
    </div>):
    flag1==false?
   ( <Otp onOtpSubmit={handleSignu} username={username} password={password} email={email} />):<LoginPage/>
    )
}

export default Sign
