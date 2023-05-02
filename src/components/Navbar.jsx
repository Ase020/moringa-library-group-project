import { Link } from "react-router-dom";

const Navbar = () => {
   return (
      <div className="navbar-wrapper">
         <Link to="/" className="navbar">
            <img src="https://moringaschool.com/wp-content/uploads/2022/02/cropped-favicon-32x32.png" alt="" />

            <h3 className="logo-title">Moringa Library</h3>
         </Link>

         <Link to="my-shelf">My Shelf</Link>
         <link to="">Favourites</link>
      </div>
   );
};

export default Navbar;
