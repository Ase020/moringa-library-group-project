/* eslint-disable react/prop-types */

import BooksCard from "./BooksCard";
import shelf from "../../public/shelf.png";

const EmptyShelf = () => {
   return (
      <div className="empty-shelf">
         <h2>No books on this shelf yet.</h2>
         <img src={shelf} alt="Empty shelf" />
      </div>
   );
};

const MyShelf = ({ shelf }) => {
   return (
      <div className="my-shelf">
         <h4>My Shelf </h4>
         <div className="books-wrapper">{shelf.length > 0 ? shelf.map((book) => <BooksCard key={book.id} book={book} />) : <EmptyShelf />}</div>
      </div>
   );
};

export default MyShelf;
