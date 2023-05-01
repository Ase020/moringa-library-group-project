import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Book, Home, Layout, MyShelf } from "./components";
import "./App.css";
import { useContext, useEffect, useState } from "react";
import { BooksContext } from "./context/books";

function App() {
   // const [books, setBooks] = useState([]);
   // const [loading, setLoading] = useState(false);

   const [books, loading] = useContext(BooksContext);

   // useEffect(() => {
   //    fetch("https://fakerapi.it/api/v1/books?_quantity=100")
   //       .then((res) => res.json())
   //       .then(({ data }) => {
   //          setBooks(data);
   //          setLoading(true);
   //       });
   // }, []);

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
               element: <MyShelf />,
            },
            {
               path: "/books/:id",
               element: <Book />,
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
