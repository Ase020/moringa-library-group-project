import { useContext, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Book, Favorites, Home, Layout, MyShelf } from "./components";
import { BooksContext } from "./context/books";
import { MyShelfContext } from "./context/myShelf";
import "./App.css";

function App() {
   const [books, loading] = useContext(BooksContext);

   const [shelf, setShelf] = useContext(MyShelfContext);

   const addToShelf = (id) => {
      const find = books.find((book) => book.id === id);
      if (!shelf.includes(find)) {
         setShelf([...shelf, find]);
         console.log("added");
      }
   };

   const router = createBrowserRouter([
      {
         path: "/",
         element: <Layout />,
         children: [
            {
               path: "/",
               element: <Home books={books} loading={loading} />,
            },
            {
               path: "/my-shelf",
               element: <MyShelf shelf={shelf} />,
            },
            {
               path: "/books/:id",
               element: <Book addToShelf={addToShelf} />,
            },
            {
               path: "/favorites",
               element: <Favorites />,
            },
         ],
      },
   ]);
   return (
      <>
         <RouterProvider router={router} />
      </>
   );
}

export default App;
