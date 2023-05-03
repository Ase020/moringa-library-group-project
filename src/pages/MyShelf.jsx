/* eslint-disable react/prop-types */

import { BooksCard, EmptyShelf } from "../components";

const MyShelf = ({ shelf }) => {
   return (
      <div className="my-shelf">
         <h4>My Shelf </h4>
         <div className="books-wrapper">{shelf.length > 0 ? shelf.map((book) => <BooksCard key={book.id} book={book} />) : <EmptyShelf />}</div>
      </div>
   );
};

export default MyShelf;
