import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/photos/Logo.png";
const Header = () => {
  return (
    <div className="flex justify-between items-center px-2 my-3">
      <Link to="/">
        <img className="w-1/3 md:w-2/3" src={logo} alt="" />
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
