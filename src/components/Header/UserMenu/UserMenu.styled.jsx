import styled from '@emotion/styled';

export const UserMenuComponent = styled.div`
    display: flex;
    gap: 10px;
`
export const UserMenuTitle = styled.p`
    
`
export const UserMenuButton = styled.button`
     width: 100%;
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
`