import React from 'react'
import '../BookStore_css/AuthForm.css'
import { useState } from 'react';
import Login from '../Login';
import Register from '../Register';

  function AuthForm() {
    const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='auth'>
      <h3 className='title'>"Your gateway to countless tales and knowledge"</h3>
   <input
      type="text"
      value={userName}
      onChange={(e)=>setUserName(e.target.value)}
      placeholder="Enter UserName"
      
    />
    <br></br>
     <input
      type="password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      placeholder="Enter Password"
    />
    <br />
    <div className="button-group">
  <Login userName={userName} password={password} />

  <Register userName={userName} password={password}/>
  </div>


    </div>
  );
}

  

export default AuthForm