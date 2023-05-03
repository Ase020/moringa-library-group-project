/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { BooksContext } from "../context/books";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Book = ({ addToShelf }) => {
   const [books] = useContext(BooksContext);
   const { id } = useParams();
   const bookObj = books[id - 1];

   return (
      <div className="bookDetails">
         <img src={bookObj.image} alt={bookObj.id} className="bookDetail-img" />

         <div className="more-details">
            <h4>{bookObj.title}</h4>

            <span>{bookObj.author}</span>

            <p>{bookObj.description}</p>

            <span>{bookObj.genre}</span>

            <p>Publisher: {bookObj.publisher}</p>

            <p>Published on: {bookObj.published}</p>

            <p>ISBN: {bookObj.isbn}</p>

            <button className="add-to-shelf" onClick={() => addToShelf(bookObj.id)}>
               Add to My Shelf
            </button>

            <Link to="/" className="go-back">
               <FontAwesomeIcon icon={faArrowLeft} /> Go back
            </Link>
         </div>
      </div>
   );
};

export default Book;
