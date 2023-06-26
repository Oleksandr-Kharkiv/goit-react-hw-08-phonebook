import styled from '@emotion/styled';

export const FilterComponent = styled.div`
    margin-top: 3px;
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 20px 30px;
    max-width: 400px;
    height: auto;
    border-radius: 5px;
    background-color: var(--background-color-component);
    box-shadow: var(--box-shadow);
`

export const FilterLabel = styled.label`
    font-size: 20px;
    font-weight: 700;
    line-height: calc(26/20);
    letter-spacing: .05em;
    color: var(--accent-color);
`

export const FilterInput = styled.input`
    margin: 0;
    padding: 7px 5px 5px;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    line-height: calc(20/18);
    letter-spacing: .05em;
    border-radius: 5px;
    color: var(--second-text-color);
    background-color: var(--background-color);
    box-shadow: var(--box-shadow-inset); 
    border-color: inherit; 
`