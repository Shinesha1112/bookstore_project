
import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddBooks from './AddBooks';
import { useLocation,useSearchParams } from 'react-router-dom';
import '../BookStore_css/BookList.css';
import BASE_URL from '..//..//config';
import LogOut from './LogOut';

function BookStore() {
  const username = localStorage.getItem('username');

const [searchParams] = useSearchParams();
  const [currentPage,setCurrentPage]=useState(1);
    const booksPerPage = 3;
const pageFromURL = parseInt(searchParams.get("page")) || 1;
useEffect(() => {
  setCurrentPage(pageFromURL);
}, []);
  const navigate=useNavigate();
     const [Books,setBooks] = useState([]);
     useEffect(()=>{
      const fetchBooks=async()=>{
        try{
          const response=await fetch(`${BASE_URL}books/`);
          const data=await response.json();
          setBooks(data);
        }
        catch(error){
         alert("Failed");
        }
      };
      fetchBooks();
    
     },[])


     const handleDelete=async(id)=>{
        const confirmDelete = window.confirm("Are you sure you want to delete this book?");
        if(!confirmDelete) return;
      try{
         await fetch(`${BASE_URL}books/${id}`,{
          method:"DELETE"
         });
         setBooks(Books.filter((book) => book.id !== id));
         alert("Book deleted successfully!")
         
      }
      catch (error){ 
        alert("Failed to Delete!");

      }


     }
     const handleEdit = (book) => {
  navigate('/addBooks', { state: { book ,mode:'edit',page:currentPage} });  
};

const handleBookDetails=(book)=>{ 
  navigate('/bookDetails',{state:{book}})

}
const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = Books.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(Books.length / booksPerPage);

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  }
     
  return (
    <div>
      <LogOut/>
    <div className='bookList'>
      
        <h3>"List of Books"</h3>
     
        <ul>
          {currentBooks.map((book)=>(
            <li key={book.id}  >
              <div className='book-details'>
              <strong>{book.bookName}</strong><h4>{book.author}</h4>
              <button onClick={() => handleBookDetails(book)}>
          View Details
        </button>
               </div>
               
                {username === 'admin' && (
      <div className='book-actions'> 
        
        <button onClick={(e) => { e.stopPropagation();  handleEdit(book)}}>Edit</button>
        <button onClick={(e) => { e.stopPropagation(); handleDelete(book.id)}}>Delete</button>
      </div>
    )}          
            </li>
          ))}
        </ul>
      
      {username==='admin'&& <button onClick={() => navigate('/addBooks')}>Add New Books</button>}

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} onClick={() => changePage(i + 1)} className={currentPage === i + 1 ? "active" : ""}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
    </div>
  
  )
}

export default BookStore