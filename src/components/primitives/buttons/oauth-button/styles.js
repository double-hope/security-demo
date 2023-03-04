import { css } from '@emotion/react';

export const oauthButton = () => css`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 5px;
    width: 100%;
    max-width: 300px;
    margin: 5px 0;
    padding: 10px 20px;
    background-color: #fff;
    border: 1px solid #bfbfbf;
    box-shadow: 0 0 5px #85858560;
    border-radius: 30px;
    cursor: pointer;
    font-size: 13px;
    color: black;
`;

export const oauthButtonText = () => css`
    font-weight: 600;
`;
