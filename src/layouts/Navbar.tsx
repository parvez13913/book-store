import { Link, useNavigate } from "react-router-dom";
import { FcReading } from "react-icons/fc";
import swal from "sweetalert";

const Navbar = () => {
  const accessToken = localStorage.getItem("accessToken");
  const navigation = useNavigate();
  const handelLogOut = () => {
    localStorage.removeItem("accessToken");
    swal("Log Out", "User Log Out successfully", "success");
    navigation("/login");
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-start">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl text-[#8cc090]"
          >
            <FcReading />
            BookVerse
          </Link>
        </div>
        <div className="navbar-center lg:flex text-[#8cc090]">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/allBooks">All Books</Link>
            </li>
            <li>
              <Link to="/addBook">Add Book</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex-none">
          <ul>
            {!accessToken && (
              <li>
                <Link
                  to="/login"
                  className="mr-3 p-2 btn btn-ghost text-[#8cc090]"
                >
                  Log In
                </Link>
              </li>
            )}
            {accessToken && (
              <li>
                <button
                  className="mr-3 p-2 btn btn-ghost text-[#8cc090]"
                  onClick={handelLogOut}
                >
                  Log Out
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
