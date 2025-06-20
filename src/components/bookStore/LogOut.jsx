import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../BookStore_css/LogOut.css'

function LogOut() { 
  const navigate=useNavigate();

    const handleLogOut=()=>{
      localStorage.removeItem('username');
      navigate('/')

    }
  return (
    <div style={{ position: 'relative' }}>
  <button
    onClick={handleLogOut}
  className='logOutButton'
  >
    LogOut
  </button>
</div>

  )
}

export default LogOut