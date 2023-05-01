import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const BooksCard = () => {
   return (
      <div className="book-card">
         <img src="http://placeimg.com/480/640/any" alt="" className="book-img" />
         <span className="book-title">Hatter. 'It isn't.</span>
         <button className="show-more">
            <Link to={`/books/${"id"}`}>More Details</Link>
         </button>
      </div>
   );
};

export default BooksCard;
