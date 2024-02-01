import { Link } from "react-router-dom";

export default function Navigation(props) {
  return (
    <menu className={`navbar-menu ${props.device}`}>
      {props.device === "mobile" ? (
        ""
      ) : (
        <Link className="logo" to="/">
          <img
            src={require("../assets/nav-logo.png")}
            alt="Little Lemon logo"
            className="nav-image"
          ></img>
        </Link>
      )}
<h3 className="empty">&nbsp;</h3> 
      <Link className="hover-effect" to="/">
        <h3>Home</h3>
      </Link>
      <Link className="hover-effect" to="/about">
        <h3>About</h3>
      </Link>
      <a
        className="hover-effect"
        href={require("../assets/menu.webp")}
        target="_blank"
        rel="noreferrer"
      >
        <h3>Menu</h3>
      </a>
      <Link className="hover-effect" to="/reservations">
        <h3>Reservations</h3>
      </Link>
      <Link className="hover-effect" to="/order">
        <h3>Order</h3>
      </Link>
      <Link className="hover-effect" to="/login">
        <h3>Login</h3>
      </Link>

    </menu>
  );
}
