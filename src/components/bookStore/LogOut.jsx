import React from 'react'
import { useNavigate } from 'react-router-dom';

function LogOut() { 
  const navigate=useNavigate();

    const handleLogOut=()=>{
      localStorage.removeItem('username');
      navigate('/')

    }
  return (
    <nav style={{ padding: '10px', background: '#f2f2f2' }} >
        <h3 style={{ display: 'inline-block', marginRight: '20px' }}>📚 Bookstore</h3>
        <button onClick={handleLogOut} style={{ float: 'right' }}>
            LogOut
        </button>

    </nav>
  )
}

export default LogOut