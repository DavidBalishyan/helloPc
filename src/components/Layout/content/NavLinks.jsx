import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NavLinks = ({isMenuOpen}) => {
  // portrait
  if (isMenuOpen) {
    return (
      <div className="px-6 space-y-4">
        <Link
          to="/home"
          className="text-current hover:bg-blue-500 px-3 py-2 rounded-md text-lg block"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-current hover:bg-blue-500 px-3 py-2 rounded-md text-lg block"
        >
          About
        </Link>
        <Link
          to="/services"
          className="text-current hover:bg-blue-500 px-3 py-2 rounded-md text-lg block"
        >
          Services
        </Link>
        <Link
          to="/contact"
          className="text-current hover:bg-blue-500 px-3 py-2 rounded-md text-lg block"
        >
          Contact
        </Link>
      </div>
    );
  }

  // landscape
  return (
    <div className="hidden lg:flex space-x-6">
      <Link
        to="/home"
        className="text-current hover:bg-blue-500 px-3 py-2 rounded-md text-lg"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="text-current hover:bg-blue-500 px-3 py-2 rounded-md text-lg"
      >
        About
      </Link>
      <Link
        to="/services"
        className="text-current hover:bg-blue-500 px-3 py-2 rounded-md text-lg"
      >
        Services
      </Link>
      <Link
        to="/contact"
        className="text-current hover:bg-blue-500 px-3 py-2 rounded-md text-lg"
      >
        Contact
      </Link>
    </div>
  );

};

export default NavLinks;

