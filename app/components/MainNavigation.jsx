import { NavLink, useHref, useNavigate } from '@remix-run/react';

function MainNavigation() {
  const anylink = useHref("users");
  const navigate = useNavigate();

  // const navigatedashboard = () => {
  //   navigate({
  //     pathname: "/dashboard",
  //     search: "?query=string",
  //     hash: "Helooo",
  //   });
  // }

  const data = [
    {
      "title": "New Notes",
      "content": "A new note!",
      "id": "2022-10-19T11:10:56.831Z"
    },
    {
      "title": "Remix is awesome!",
      "content": "It really is!",
      "id": "2022-10-19T11:16:55.247Z"
    },
    {
      "title": "react Notes",
      "content": "About React Notes",
      "id": "2024-03-19T07:06:22.150Z"
    }
  ];
  

  const one ="oooo"

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
        <li className="nav-item">
          <NavLink to="/dashboard" >Dashboard</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/adduserpage2">Add User2</NavLink>
        </li>

        <li className="nav-item">
          <a href={anylink}>Link</a>
        </li>

        <li className="nav-item">
          <a onClick={() => {
            navigate(-1)
          }}>Navigate</a>
        </li>

      </ul>
    </nav>
  );
}

export default MainNavigation;
