/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const MyShelfContext = createContext();

function MyShelfProvider({ children }) {
   const [shelf, setShelf] = useState([]);

   const value = [shelf, setShelf];

   return <MyShelfContext.Provider value={value}>{children}</MyShelfContext.Provider>;
}

export { MyShelfContext, MyShelfProvider };
