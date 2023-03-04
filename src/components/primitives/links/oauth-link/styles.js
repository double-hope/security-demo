import { css } from '@emotion/react';

export const link = () => css`
    text-decoration: none;
    color: black;
    width: 100%;
    max-width: 300px;
    font-size: 13px;
`;

export const oauthLink = () => css`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 5px;
    width: 100%;
    margin: 5px 0;
    padding: 10px 20px;
    background-color: #fff;
    border: 1px solid #bfbfbf;
    box-shadow: 0 0 5px #85858560;
    border-radius: 30px;
    cursor: pointer;
`;

export const oauthLinkText = () => css`
    font-weight: 600;
    color: black;
`;
