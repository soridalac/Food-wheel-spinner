import { Link, useMatch, useResolvedPath } from "react-router-dom";
import '../App.css';

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Tasty Food
      </Link>
      <ul>
        <CustomLink to="/foodgalleries">FoodGalleries</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default Navbar;
