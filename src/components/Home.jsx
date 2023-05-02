/* eslint-disable react/prop-types */
import BooksCard from "./BooksCard";
import Loader from "./Loader";

const Home = ({ books, loading }) => {
   if (!loading) return <Loader />;

   return (
      <div className="home">
         <div>
            <h1 className="welcome">
               Welcome to <b>Moringa</b> library.
            </h1>

            <p>Find your perfect book from a variety of genres and enjoy a good read.</p>
         </div>
         <h4>Books Collection</h4>
         <div className="books-wrapper">
            {books.map((book) => (
               <BooksCard key={book.id} book={book} />
            ))}
         </div>
      </div>
   );
};

export default Home;
