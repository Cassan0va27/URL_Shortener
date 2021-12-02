import "./styles/Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/user/dashboard">Home</Link>
      <Link to="/user/convert">Convert</Link>
      <a href="/about">About</a>
      <Link to="/user/logout">Logout</Link>
      <div className="brand">
        <Link to="/">
          <FontAwesomeIcon icon={faBrain} />
          URL-Shortner
        </Link>
      </div>
    </div>
  );
};
