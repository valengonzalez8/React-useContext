import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  
  return (
    <>
      <nav>
        <ul className="nav-container">
          <li>
            <Link className="nav-item" to="/">Home Page</Link>
          </li>
          <li>
            <Link className="nav-item" to="/user">User Information</Link>
          </li>
          <li>
            <Link className="nav-item" to="/company">Company Information</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;
