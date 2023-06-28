import { Navbar, Link } from './AutnNav.styled';

const AuthNav = () => {
  return (
    <Navbar>
      <Link to="/">Registration</Link>
      <Link to="movies">LogIn</Link>
    </Navbar>
  );
};
export default AuthNav;