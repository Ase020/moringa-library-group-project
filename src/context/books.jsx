/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

const BooksContext = createContext();

const BooksProvider = ({ children }) => {
   const [books, setBooks] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      fetch("https://fakerapi.it/api/v1/books?_quantity=100")
         .then((res) => res.json())
         .then(({ data }) => {
            setBooks(data);
            setLoading(true);
         });
   }, []);

   const value = [books, loading];

   return <BooksContext.Provider value={value}>{children}</BooksContext.Provider>;
};

export { BooksContext, BooksProvider };
