import { Outlet, Link } from "react-router-dom";
import "./layout.css";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/users">
              Usuarios
            </Link>
          </li>
          <li>
            <Link className="link" to="/messages">
              Mensajes
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
