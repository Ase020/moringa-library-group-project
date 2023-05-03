import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import { BooksProvider } from "./context/books.jsx";
import { MyShelfProvider } from "./context/myShelf.jsx";
import { FavoritesProvider } from "./context/favorite.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <BooksProvider>
         <MyShelfProvider>
            <FavoritesProvider>
               <App />
            </FavoritesProvider>
         </MyShelfProvider>
      </BooksProvider>
   </React.StrictMode>
);
