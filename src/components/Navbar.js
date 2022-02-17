import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h1>Math Magicians</h1>
    <div className="links">
      <Link to="/">Home</Link>
      <span> | </span>
      <Link to="/calculator">Calculator</Link>
      <span> | </span>
      <Link to="/quote">Quote</Link>
    </div>
  </nav>
);

export default Navbar;
