/* eslint-disable react/prop-types */
import BooksCard from "./BooksCard";
import EmptyShelf from "./EmptyShelf";

const Favorites = ({ favorite }) => {
   console.log(favorite);
   return (
      <div className="my-shelf">
         <h4>My Favorites</h4>

         <div className="books-wrapper">{favorite.length > 0 ? favorite.map((book) => <BooksCard key={book.id} book={book} />) : <EmptyShelf />}</div>
      </div>
   );
};

export default Favorites;
