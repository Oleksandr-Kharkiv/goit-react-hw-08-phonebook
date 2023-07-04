import { useDispatch, useSelector } from 'react-redux';
import { UserMenuComponent, UserMenuTitle, UserMenuButton } from './UserMenu.styled';
import { logOut } from '../../../redux/operations'
import { selectUserName } from 'redux/selectors';
// import { selectisFetchCurrentUser } from 'redux/selectors';
// import { selectIsLoggedIn } from 'redux/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserName);
  // const refreshUser = useSelector(selectisFetchCurrentUser)
  // const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
      <UserMenuComponent>
        <UserMenuTitle>{user}</UserMenuTitle>
        <UserMenuButton type="button" onClick={() => dispatch(logOut())}>Logout</UserMenuButton>
      </UserMenuComponent>
  );
};

export default UserMenu;