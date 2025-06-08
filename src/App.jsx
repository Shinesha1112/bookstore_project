import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import { Route,Routes } from 'react-router-dom'
import BookStore from './components/bookStore/BookStore'
import AddBooks from './components/bookStore/AddBooks'
import BookDetails from './components/bookStore/BookDetails'
import AuthForm  from './components/bookStore/AuthForm'


function App() {
 

  return (
  <Routes>
      <Route path="/" element={<AuthForm />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/bookList" element={<BookStore/>}/>
      <Route path="/addBooks" element={<AddBooks/>}></Route>
      <Route path="/bookDetails" element={<BookDetails/>}></Route>
    </Routes>
  
  

  )
}

export default App
