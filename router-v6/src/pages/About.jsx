import { Link, NavLink } from "react-router-dom";
import Table from "../components/Table";

const About = () => {
  return (
    <div className="container">
      <h1>
        ABOUT <hr />
      </h1>
      <p>LINK</p>
      <div className="d-flex justify-content-center gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contacts</Link>
      </div>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <p>NAVLINK</p>
      <div className="d-flex justify-content-center gap-4">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "null")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "null")}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "null")}
          to="/contacts"
        >
          Contacts
        </NavLink>
      </div>
      <hr />
      <p>PAGINATION</p>
      <Table />
    </div>
  );
};

export default About;
