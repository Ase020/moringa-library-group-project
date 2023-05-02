import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Book, Home, Layout, MyShelf } from "./components";
import "./App.css";
import { useContext } from "react";
import { BooksContext } from "./context/books";
import MyFavourite from "./components/MyFavoutrite";

function App() {
   const [books, loading] = useContext(BooksContext);

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
            {
               path: "/my-favourite",
               element: <MyFavourite />,
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
