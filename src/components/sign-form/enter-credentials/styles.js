import { css } from '@emotion/react'; 

export const wrapper = () => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 40px;
`;

export const signForm = () => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 20px;
    gap: 10px;
`;

export const inputContainer = () => css`
    position: relative;
    padding-bottom: 25px;
    width: 100%;
    max-width: 300px;
`; 