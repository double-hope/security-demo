import { css } from '@emotion/react';

export const button = () => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 250px;
    margin: 10px 0;
    padding: 10px;
    background-color: #4267B2;
    color: white;
    border: none;
    box-shadow: 0 0 5px hsla(0, 0%, 0%, 0.4);
    border-radius: 20px;
    font-weight: 600;
    font-size: 1.05rem;
    cursor: pointer;

    &:disabled {
        background-color: #b0b3b8;
        color: #575859;
        cursor: not-allowed;
    }
`;