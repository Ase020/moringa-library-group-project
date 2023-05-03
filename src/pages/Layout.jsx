import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Layout = () => {
   return (
      <div className="App">
         <Navbar />
         <Outlet />
         <Footer />
      </div>
   );
};

export default Layout;
