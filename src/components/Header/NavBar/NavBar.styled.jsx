import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Navbar = styled.nav`
  display: flex;
  gap: 10px;
  padding: 5px;
`;

export const Link = styled(NavLink)`
  position: relative;
  padding: 5px;
  margin: 0;
  text-decoration: none;
  color: var(--first-text-color);
  font-size: 20px;
  font-weight: 700;
  transition: color 200ms var(--timing-function);
  /* &.active {
    border-radius: 5px;
    border-color: inherit;
    background-color: var(--background-color);
    box-shadow: var(--box-shadow-inset);
  } */
  &:hover {
    color: var(--accent-color);
  }
  &:active {
    color: var(--second-text-color);
  }
  &::after {
    position: absolute;
    content: '';
    bottom: -5px;
    left: 0;
    right: 0;
    width: 100%;
    height: 4px;
    background-color: transparent;
    border-radius: 2px;
    transform: scaleX(0.3);
    transition: background-color 200ms var(--timing-function),
      transform 200ms var(--timing-function);
  }
  &:hover::after {
    transform: scaleX(1);
    background-color: var(--accent-color);
  }
  &:active:after {
    background-color: var(--second-text-color);
  }
`;

