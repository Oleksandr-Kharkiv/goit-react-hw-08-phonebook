import styled from '@emotion/styled';

export const UserMenuComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const UserMenuTitle = styled.p`
display: block;
   position: relative;
   margin: 5px;
   width: 100%;
   font-size: 20px;
   font-weight: 700;
   font-size: 16px;
   color: var(--second-text-color);
   animation: rotate 7s ease-in-out alternate infinite;

  &:before {
    content: attr(data-shadow);
    color: transparent;
    text-shadow: 0 0 15px #111;
    position: absolute;
    z-index: -1;
    margin: -0.1em 0 0 0;
    animation: skew 7s ease-in-out alternate infinite;
    transform-origin: bottom;
  }
  @keyframes rotate {
    from {
      transform: rotateY(-10deg);
      text-shadow: 1px -1px #ccc, 
      2px -1px #bbb, 
      3px -2px #aaa, 
      4px -2px #aaa,
      5px -3px #999, 
      6px -3px #888;
    }
    to {
      transform: rotateY(10deg);
      text-shadow: -1px -1px #ccc, 
      -2px -1px #bbb,
      -3px -2px #aaa,
      -4px -2px #aaa,
      -5px -3px #999,
      -6px -3px #888;
    }
  }
  @keyframes skew {
    from {
      transform: scaleY(0.3) skewX(-15deg);
    }
    to {
      transform: scaleY(0.3) skewX(-20deg);
    }
  }
`

export const UserMenuButton = styled.button`
  height: 40px;
  padding: 5px 10px;
  border-radius: 5px;
  border-color: inherit;
  background-color: var(--background-color);
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.16);
  text-transform: capitalize;
  font-weight: 600;
  font-size: 16px;
  color: var(--first-text-color);
  cursor: pointer;
  &:active {
    color: var(--second-text-color);
  }
`;
