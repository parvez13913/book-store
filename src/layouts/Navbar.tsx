import { Link } from "react-router-dom";
import { FcReading } from "react-icons/fc";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <FcReading />
            BookVerse
          </Link>
        </div>
        <div className="navbar-center lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <a>All Books</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
