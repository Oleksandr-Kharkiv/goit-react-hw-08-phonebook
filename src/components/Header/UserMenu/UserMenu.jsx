import { UserMenuComponent, UserMenuTitle, UserMenuButton } from './UserMenu.styled';

const UserMenu = () => {
  return (
      <UserMenuComponent>
        <UserMenuTitle>mango@mail.com</UserMenuTitle>
        <UserMenuButton>Logout</UserMenuButton>
      </UserMenuComponent>
  );
};
export default UserMenu;