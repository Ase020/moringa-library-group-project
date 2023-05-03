/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line react/prop-types
const BooksCard = ({ book, addToFavorites }) => {
   const { title, image, id } = book;

   // To randomise the book images
   // const randomNum = Math.floor(Math.random() * 900) + 100; // generate random 3-digit number

   // const newImage = image.slice(0, -3) + randomNum; // remove last 3 letters and add random number
   return (
      <div className="book-card">
         <img src={image} alt={title} className="book-img" />
         <span className="book-title">{title}</span>
         <button className="show-more">
            <Link to={`/books/${id}`} style={{ color: "#fff" }}>
               More Details
            </Link>
         </button>

         <button className="like-button" onClick={() => addToFavorites(id)}>
            {" "}
            👍
         </button>
      </div>
   );
};

export default BooksCard;
