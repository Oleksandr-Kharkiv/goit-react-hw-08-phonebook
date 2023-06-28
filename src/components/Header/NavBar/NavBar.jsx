import { Navbar, Link } from './NavBar.styled';

const NavBar = () => {
  return (
    <Navbar>
      <Link to="/">Home</Link>
      <Link to="/contacts">Contacts</Link>
    </Navbar>
  );
};
export default NavBar;
