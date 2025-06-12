import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BASE_URL from './../config';


function Login({userName,password}) {
   const navigate=useNavigate();
    const handleLoginButton= async ()=>{
      if(userName.trim()===''||password.trim()===''){
        alert("Please Enter the both fields");
        return;
      } 
      
      
      try{
        const response = await fetch("https://bookstore-backend-ijsd.onrender.com/api/login",{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({userName:userName,password:password})
        });
        if(response.ok){
            const result=await response.json();
            if(result.status ==='success'){
                 localStorage.setItem('username', userName);
                 navigate('/bookList',{ state: { username: userName } }); // move to Home Page
        } else {
          alert('Invalid username or password');
        }
      } else {
        alert('Something went wrong with login');
      } 
    }

    catch(error) {
      console.error('Error during login:', error);
      alert('Something went wrong. Try again later.');
    };
    }
    
  return (
    <div style={{textAlign:"center"}}>
      
       <button onClick={handleLoginButton} style={{ marginTop: '10px' }}>Login</button>
    </div>
  )
}

export default Login