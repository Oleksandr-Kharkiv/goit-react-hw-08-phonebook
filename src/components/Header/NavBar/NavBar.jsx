import { useSelector } from 'react-redux';
import { Navbar, Link } from './NavBar.styled';
import { selectIsLoggedIn } from 'redux/selectors';

const NavBar = () => {
  let isLoggedIn = useSelector(selectIsLoggedIn)
  return (
    <Navbar>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </Navbar>
  );
};
export default NavBar;
