import { css } from '@emotion/react';

export const inputWrapper = () => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 250px;
`;

export const input = () => css`
    box-shadow: 0 0 5px hsla(0, 0%, 0%, 0.4);
    border-radius: 20px;
    margin: 5px 0;
    padding: 10px;
`;