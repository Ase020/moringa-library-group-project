import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Book, Home, Layout, MyShelf } from "./components";
import "./App.css";
import { useContext } from "react";
import { BooksContext } from "./context/books";
import { MyShelfContext } from "./context/myShelf";

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
