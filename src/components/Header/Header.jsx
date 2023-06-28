import { HeaderComponent } from './Header.styled';
import UserMenu from './UserMenu/UserMenu'
import NavBar from './NavBar/NavBar'
import AuthNav from './AuthNav/AuthNav'

const Header = () => {
  return (
    <HeaderComponent>
      <NavBar />
      <AuthNav/>
      <UserMenu />
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
