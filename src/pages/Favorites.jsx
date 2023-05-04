/* eslint-disable react/prop-types */
import { BooksCard, EmptyShelf } from "../components";

const Favorites = ({ favorite, removeFromCollection }) => {
   console.log(favorite);
   return (
      <div className="my-shelf">
         <h4>My Favorites</h4>

         <div className="books-wrapper">{favorite.length > 0 ? favorite.map((book) => <BooksCard key={book.id} book={book} onClick={removeFromCollection} />) : <EmptyShelf />}</div>
      </div>
   );
};

export default Favorites;
