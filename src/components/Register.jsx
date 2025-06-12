import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import BASE_URL from './/../config';



function Register({userName,password}) {
   const navigate = useNavigate();
    
    const handleRegsiterButton = async()=>{
        if(userName.trim()===''||password.trim()===''){
        alert('Please Enter both the fields');
        return;
    }
    try{ 
        const response=await fetch(`${BASE_URL}api/register`,{
            method:"POST",
            headers:{
                'Content-Type':"application/json",
            },
            body:JSON.stringify({userName,password})
        })
        
        if (response.ok) {
          const result = await response.json();
        
          if(result.status==='success'){
        alert('Registration successful! Please log in.');
       navigate('/');
        
      }
      else{
        alert(result.error);
      }
    }else {
  alert("Registration failed");
}
        

    }catch(error) {
      console.error('Error:', error);
      alert('Something went wrong!');
    }
         };
  return (
    <div style={{textAlign:"center"}}>   
         <button onClick={handleRegsiterButton} style={{ marginTop: '10px' }}>Register</button>

    </div>
  )
}

export default Register