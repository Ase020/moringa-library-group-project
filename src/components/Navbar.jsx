import { Link } from "react-router-dom";

const Navbar = () => {
   return (
      <div className="navbar-wrapper">
         <Link to="/" className="navbar">
            <img src="https://moringaschool.com/wp-content/uploads/2022/02/cropped-favicon-32x32.png" alt="" />

            <h3 className="logo-title">Moringa Library</h3>
         </Link>

         <Link to="my-shelf">
            <h4 className="navbar-text">My Shelf</h4>

         </Link>
         <Link to="my-shelf">
            <h4 className="navbar-text">Liked Books</h4>

         </Link>
      </div>
   );
};

export default Navbar;
