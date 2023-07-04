import { useDispatch, useSelector } from 'react-redux';
import { UserMenuComponent, UserMenuTitle, UserMenuButton } from './UserMenu.styled';
import { logOut } from '../../../redux/operations'
import { selectUserName } from 'redux/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  console.log(userName);
 
  return (
      <UserMenuComponent>
        <UserMenuTitle>Welcome, {userName}</UserMenuTitle>
        <UserMenuButton type="button" onClick={() => dispatch(logOut())}>Logout</UserMenuButton>
      </UserMenuComponent>
  );
};

export default UserMenu;