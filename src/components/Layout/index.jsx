import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "./Footer";


const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-grow">
        <Outlet />
      </div>
      <Footer/>
    </>
  );
};

export default Layout;
