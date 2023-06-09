import { useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Book, Favorites, Home, MyShelf, Layout } from "./pages";
import { BooksContext } from "./context/books";
import { MyShelfContext } from "./context/myShelf";
import { FavoritesContext } from "./context/favorite";
import "./App.css";

function App() {
   const [books, loading] = useContext(BooksContext);

   const [shelf, setShelf] = useContext(MyShelfContext);

   const [favorite, setFavorite] = useContext(FavoritesContext);

   const addToShelf = (id) => {
      const find = books.find((book) => book.id === id);
      if (!shelf.includes(find)) {
         setShelf([...shelf, find]);
      }
   };

   const removeFromShelf = (id) => {
      setShelf(shelf.filter((book) => book.id !== id));
   };

   const addToFavorites = (id) => {
      const find = books.find((book) => book.id === id);
      if (!favorite.includes(find)) {
         setFavorite([...favorite, find]);
      }
   };

   const removeFromFavorites = (id) => {
      setFavorite(favorite.filter((book) => book.id !== id));
   };

   const router = createBrowserRouter([
      {
         path: "/",
         element: <Layout />,
         children: [
            {
               path: "/",
               element: <Home books={books} loading={loading} addToFavorites={addToFavorites} />,
            },
            {
               path: "/my-shelf",
               element: <MyShelf shelf={shelf} />,
            },
            {
               path: "/books/:id",
               element: <Book addToShelf={addToShelf} removeFromShelf={removeFromShelf} />,
            },
            {
               path: "/favorites",
               element: <Favorites favorite={favorite} removeFromFavorites={removeFromFavorites} />,
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
