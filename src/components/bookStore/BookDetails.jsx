import React from 'react';
import {useLocation,useNavigate} from 'react-router-dom';
import '../BookStore_css/BookDetails.css'

function BookDetails() {
    const navigate=useNavigate();
    const location=useLocation();
    const bookDetails=location.state?.book;
    console.log(bookDetails);
    console.log(bookDetails.available);

     if (!bookDetails) {
    return <p>No book details available.</p>;
  }
  return (
     <div className="book-details-container" >
      <div className="book-details-card">
        <h2 className="book-title">{bookDetails.bookName}</h2>
        <p className="book-author">{bookDetails.author} - ₹{bookDetails.price}</p>

        <div className="book-info">
          <p><strong>Description: </strong> {bookDetails.description}</p>
          <p><strong>Volume: </strong> {bookDetails.volume}</p>
          <p><strong>Category: </strong> {bookDetails.category}</p>

          <p><strong>Available: </strong> {bookDetails?.available === 'true' || bookDetails?.available === true ? 'Yes' : 'No'}</p>

          <p><strong>Stock:</strong> {bookDetails.stock}</p>
        </div>
      </div>
      
        <button onClick={()=>navigate('/bookList')} className='backBtn' >Back</button>
      
    </div>
  )
}

export default BookDetails