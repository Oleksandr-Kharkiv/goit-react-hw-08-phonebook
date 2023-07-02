import { useDispatch } from 'react-redux';
import { UserMenuComponent, UserMenuTitle, UserMenuButton } from './UserMenu.styled';
import { logOut } from '../../../redux/operations'

const UserMenu = () => {
  const dispatch = useDispatch();
  return (
      <UserMenuComponent>
        <UserMenuTitle>mango@mail.com</UserMenuTitle>
        <UserMenuButton type="button" onClick={() => dispatch(logOut())}>Logout</UserMenuButton>
      </UserMenuComponent>
  );
};
export default UserMenu;