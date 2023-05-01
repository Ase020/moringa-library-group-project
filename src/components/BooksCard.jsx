/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line react/prop-types
const BooksCard = ({ book }) => {
   const { title, image, id } = book;
   return (
      <div className="book-card">
         <img src={image} alt={title} className="book-img" />
         <span className="book-title">{title}</span>
         <button className="show-more">
            <Link to={`/books/${id}`}>More Details</Link>
         </button>
      </div>
   );
};

export default BooksCard;
