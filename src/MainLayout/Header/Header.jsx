import { Link, NavLink } from "react-router-dom";
import logo from "/photos/Logo.png";
const Header = () => {
  return (
    <div className="flex justify-between items-center px-4 lg:px-2 my-3 max-w-7xl mx-auto">
      <Link to="/">
        <img className="w-1/2 md:w-2/3" src={logo} alt="" />
      </Link>
      <div className="space-x-2 md:space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#FF444A] underline" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/donation"
          className={({ isActive }) =>
            isActive ? "text-[#FF444A] underline" : ""
          }
        >
          Donation
        </NavLink>
        <NavLink
          to="/statistics"
          className={({ isActive }) =>
            isActive ? "text-[#FF444A] underline" : ""
          }
        >
          Statistics
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
