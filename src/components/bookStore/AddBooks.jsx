import React from "react";
import { useState } from "react";
import { useLocation } from 'react-router-dom';
import '../BookStore_css/AddBook.css'
import { useNavigate } from "react-router-dom";
import BASE_URL from '..//..//config'

function AddBooks() {
  const navigate=useNavigate();
  const location=useLocation();
  const editBook = location.state?.book;

  const mode=location.state?.mode;
  

  const[book,setBook]=useState(editBook||{
    bookName:'',
      author:'',
      category:'',
      price:'',
      description:'',
      publishedDate:'',
      stock:'',
      volume:'',
      available:true
  }) ;
  const handleChange=(e)=>{
     const { name, value, type, checked } = e.target;
    setBook({
      ...book,
      [name]: type === 'checkbox' ? checked : value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method=editBook?"PUT":"Post";
    const url=editBook?`${BASE_URL}/books/${editBook.id}`:`${BASE_URL}/books`;
    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      });
      if (response.ok) {
          alert(editBook ? 'Book updated successfully!' : 'Book added successfully!');
        setBook({
        bookName:'',
        author:'',
        price:'',
        description:'',
        category:'',
        publishedDate:'',
        stock:'',
        volume:'',
        available:true
        });
      } else {
        alert("Failed to add book.");
      }
    } catch (error) {
      console.error("Error adding book:", error);
      alert("Something went wrong.");
    }
  };
  return (
    <div  className='addBook'>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
  <label>Book Name:</label>
  <input type="text" name="bookName" value={book.bookName} placeholder="Enter username" onChange={handleChange} required />
</div>
       <div className="form-group">
  <label>Author:</label>
  <input type="text" name="author" value={book.author}  placeholder="Enter author" onChange={handleChange} required />
</div>
          <div className="form-group">
  <label>Volume:</label>
  <input type="text" name="volume" value={book.volume} placeholder="Enter Volume" onChange={handleChange} required />
</div>
          <div className="form-group">
  <label>Description:</label>
  <input type="text" name="description" value={book.description} placeholder="Enter description"onChange={handleChange} required />
</div> 

        <div className="form-group">
       
        <label>Category:</label>
        
        <select name="category" value={book.category}  onChange={handleChange}>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Science">Science</option>
          <option value="Technology">Technology</option>
          <option value="Biography">Biography</option>
        </select>
        </div>

   <div className="form-group">
        <label>Published Date:</label>
        <input
          type="date"
          name="publishedDate"
          value={book.publishedDate}
          onChange={handleChange} required
          placeholder="Enter published date"
        />
        </div>
        <div className="form-group">
         <label>Price:</label>
        
        <input
          type="text"
          name="price"
          value={book.price}
          onChange={handleChange} required
          placeholder="Enter price"
        />
        </div>
         <div className="form-group">
        <label>Stock :</label>
        <input
          type="text"
          name="stock"
          value={book.stock}
          onChange={handleChange} required
          placeholder="Enter stock"
        />
        </div>
        <div className="form-group">
        <label>Available:</label>
          <input type="checkbox" 
          name="available"
           checked={book.available} 
           onChange={handleChange}
           className="checkbox-large"
           />
        
        </div>
          
         <button type="submit" className="addbookbtn">
  {mode === 'edit' ? 'Update Book' : 'Add Book'}
</button>
         <button onClick={()=>navigate('/bookList')} className='addbackBtn'>Back</button>
      </form>
    </div>
  );
}
export default AddBooks;
