import { useDispatch, useSelector } from 'react-redux';
import { UserMenuComponent, UserMenuTitle, UserMenuButton } from './UserMenu.styled';
import { logOut } from '../../../redux/operations'
import { selectUserEmail } from 'redux/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(selectUserEmail);
  // console.log(userEmail);
 
  return (
      <UserMenuComponent>
        <UserMenuTitle>Welcome, {userEmail}</UserMenuTitle>
        <UserMenuButton type="button" onClick={() => dispatch(logOut())}>Logout</UserMenuButton>
      </UserMenuComponent>
  );
};

export default UserMenu;