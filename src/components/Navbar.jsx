import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyShelfContext } from "../context/myShelf";

const Navbar = () => {
   const [shelf] = useContext(MyShelfContext);

   const count = shelf.length;
   return (
      <div className="navbar-wrapper">
         <Link to="/" className="navbar">
            <img src="https://moringaschool.com/wp-content/uploads/2022/02/cropped-favicon-32x32.png" alt="" />

            <h3 className="logo-title">Moringa Library</h3>
         </Link>

         <div className="nav-links">
            <Link to="favorites">Favorites</Link>

            <div className="count-wrapper">
               <Link to="my-shelf">My Shelf</Link>
               <span className="books-count">{count}</span>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
