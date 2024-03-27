import { NavLink } from '@remix-run/react';

function MainNavigation() {
  return (
    <nav id="main-navigation">
      <ul>
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/notes">My Notes</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/users">Users List</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/login">Log in</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;
