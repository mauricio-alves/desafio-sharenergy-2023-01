import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  function handleLogout(event) {
    event.preventDefault();
    localStorage.removeItem("loggedInUser");
    sessionStorage.removeItem("loggedInUser");
    navigate("/");
  }

  return (
    <nav className="p-5 bg-sky-600 text-cyan-50">
      <ul className="flex justify-center gap-5">
        <li>
          <Link to="/random-user">Random User</Link>
        </li>
        <li>
          <Link to="/cats">HTTP Cats</Link>
        </li>
        <li>
          <Link to="/random-dog">Random Dog</Link>
        </li>
        <li>
          <Link to="/clients">Clientes</Link>
        </li>
        <li>
          <Link to="/" onClick={handleLogout}>
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
}
