import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <span>
          <NavLink to="/">Home </NavLink>
        </span>
        <span>
          <NavLink to="/posts">Posts </NavLink>
        </span>
        <span>
          <NavLink to="/users">Users</NavLink>
        </span>
      </ul>
    </nav>
  );
};

export default NavBar;