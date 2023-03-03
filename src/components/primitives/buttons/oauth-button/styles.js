import { css } from '@emotion/react';

export const oauthButton = () => css`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 5px;
    width: 100%;
    max-width: 250px;
    margin: 10px 0;
    padding: 15px 25px;
    background-color: white;
    border: none;
    box-shadow: 0 0 5px hsla(0, 0%, 0%, 0.4);
    border-radius: 30px;
    cursor: pointer;
    transition: all .3s;

    &:hover {
        transform: scale(1.01);
    }
`;

export const oauthButtonText = () => css`
    font-weight: 600;
    color: hsla(0, 0%, 0%, 0.6);
`;
