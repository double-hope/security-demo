import { css } from '@emotion/react'; 

export const wrapper = () => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 40px;

    & > h1 {
        margin-bottom: 10px;
    }

    & p:first-of-type {
        max-width: 300px;
        text-align: center;
        font-weight: 900;
        font-size: 12px;
    }
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

export const line = () => css`
    text-decoration: underline;
`;

export const link = () => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-weight: 900;
`;

export const inputContainer = () => css`
    position: relative;
    padding-bottom: 25px;
    width: 100%;
    max-width: 300px;
`; 