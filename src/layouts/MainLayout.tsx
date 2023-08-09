import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
