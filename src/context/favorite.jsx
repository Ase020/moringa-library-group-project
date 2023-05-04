/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const FavoritesContext = createContext();

function FavoritesProvider({ children }) {
   const [favorite, setFavorite] = useState([]);
   

   const value = [favorite, setFavorite];
   return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export { FavoritesContext, FavoritesProvider };
