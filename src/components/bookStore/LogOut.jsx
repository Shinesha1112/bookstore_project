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
    style={{
      position: 'absolute',
      top: '20px',
      right: '20px',
      padding: '8px 16px',
      backgroundColor: '#fff',
      color: '#333',
      border: 'none',
      borderRadius: '6px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
      cursor: 'pointer',
      background:'#793d01',
    color:'white'
    }}
  >
    LogOut
  </button>
</div>

  )
}

export default LogOut