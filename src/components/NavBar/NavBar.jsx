import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="w-11/12 lg:w-4/5 mx-auto navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <button className="text-color2 rounded-lg border border-color2 px-5 py-3 text-18 font-semibold leading-5"><NavLink to={'/'}>Home</NavLink></button>
            <li className="py-3 text-18 text-color1.8 leading-5">
              <NavLink >Listed Books</NavLink>
            </li>
            <li className="py-3 text-18 text-color1.8 leading-5">
            <NavLink >Pages to Read</NavLink>
            </li>
          </ul>
        </div>
        <h2 className="btn btn-ghost font-extrabold text-28 leading-8"><NavLink to={'/'}>Book Vibe</NavLink></h2>
        
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <button className="text-color2 rounded-lg border border-color2 px-5 py-3 text-18 font-semibold leading-5"><NavLink to={'/'}>Home</NavLink></button>
        <li className="py-3 text-18 text-color1.8 leading-5">
          <NavLink >Listed Books</NavLink>
        </li>
        <li className="py-3 text-18 text-color1.8 leading-5">
          <NavLink >Pages to Read</NavLink>
        </li>
        </ul>
      </div>
      <div className="navbar-end space-x-4">
        <button className="text-18 font-semibold leading-5 bg-color2 text-white px-7 py-5 rounded-lg">
          <NavLink to={'/signIn'}>Sign In</NavLink>
        </button>
        <button className="text-18 font-semibold leading-5 bg-color3 text-white px-7 py-5 rounded-lg">
          <NavLink to={'/signUp'}>Sign Up</NavLink>
        </button>

      </div>
    </nav>
  );
};

export default NavBar;