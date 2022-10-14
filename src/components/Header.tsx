import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/cart">
        <h2>Cart</h2>
      </Link>
      <Link to="/">
        <h2>Home</h2>
      </Link>
    </div>
  );
};

export default Header;
