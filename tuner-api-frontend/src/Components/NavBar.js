import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import logo from "../Assets/HM-logo.png";

export default function NavBar() {
  return (
    <Nav className="NavBar">
      <Nav.Item>
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            style={{ width: "50px", height: "50px" }}
          />
        </Link>
      </Nav.Item>
      <Nav.Item>
        <h1>
          <Link to="/songs">Song List</Link>
        </h1>
      </Nav.Item>
      <Nav.Item>
        <button>
          <Link to="/songs/new">New Song</Link>
        </button>
      </Nav.Item>
    </Nav>
  );
}
