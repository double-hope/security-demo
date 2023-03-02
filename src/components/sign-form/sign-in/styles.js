import { css } from '@emotion/react'; 

export const wrapper = () => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
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

export const offscreen = () => css`
    display: none;
`;

export const errmsg = () => css`
    color: red;
`;

export const line = () => css`
    text-decoration: underline;
`;