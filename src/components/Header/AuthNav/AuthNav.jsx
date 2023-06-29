import { Navbar, Link } from './AutnNav.styled';

const AuthNav = () => {
  return (
    <Navbar>
      <Link to="/register">Registration</Link>
      <Link to="/login">Login</Link>
    </Navbar>
  );
};
export default AuthNav;