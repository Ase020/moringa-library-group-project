import { useContext } from "react";
import { useParams } from "react-router-dom";
import { BooksContext } from "../context/books";

const Book = () => {
   const [books] = useContext(BooksContext);
   const { id } = useParams();
   const bookObj = books[id - 1];
   console.log(bookObj.title, id);

   return <div>Book</div>;
};

export default Book;
