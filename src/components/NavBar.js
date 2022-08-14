import { Link, useMatch, useResolvedPath } from "react-router-dom";
import '../App.css';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Tasty Food
      </Link>
      <ul>
        <CustomLink to="/mygalleries">MyGalleries</CustomLink>
        <CustomLink to="/wheelspinner">WheelSpinner</CustomLink>
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