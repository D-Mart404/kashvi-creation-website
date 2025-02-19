import React, { useState } from 'react';
import axios from 'axios';
import './LoginPage.css'
import Sign from './Sign';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [sign,setsign]=useState(0);

   const handlesign=()=>{
       setsign(1);
   }
   


   const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { username, password });
      window.location.href = "/"; 
      const data = response.data; 

    if (data.success) {
      localStorage.setItem("user", JSON.stringify(data.user)); 
    } else {
      alert(data.message); 
    }
      const user = getUser();
      setMessage(user.message);
     
      
    } catch (error) {
      setMessage(error.response.data.message); 
    }
  };

  return (
     sign==0 ?
    (<div className='login-page'>
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='Login-button' type="submit">Login</button>
      </form>
      <p className="login-page-text">{message}</p>
      <p onClick={handlesign} className='signup'>Sign Up</p>
    </div>
    </div> ):<Sign/>
  );
};

export default LoginPage;
