import { useSelector } from 'react-redux';
import { HeaderComponent } from './Header.styled';
import UserMenu from './UserMenu/UserMenu'
import NavBar from './NavBar/NavBar'
import AuthNav from './AuthNav/AuthNav'
import { selectIsLoggedIn } from 'redux/selectors';


const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
    <HeaderComponent>
      <NavBar />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderComponent>
  );
};
export default Header;




// ========================== варіант css-модулі ==================

// import css from "./Header.module.css";
// import { NavLink } from "react-router-dom";

// const Header = () =>{
//     return (
//         <nav className={css.HeaderComponent}>
//             <div className={css.navbar}>
//                 <NavLink to='/' className={({isActive})=> (isActive ? css.active : css.navLink)}>Home</NavLink>          /* щоб виділити current link */
//                 <NavLink to='movies' className={({isActive})=> (isActive ? css.active : css.navLink)}>Movies</NavLink>  /* щоб виділити current link */
//             </div>
//         </nav>
//     )
// }
// export default Header
