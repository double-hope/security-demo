import { css } from '@emotion/react';

export const valid = () => css`
    display: inline;
    color: green;
`;

export const invalid = () => css`
    display: inline;
    color: red;
`;

export const hide = () => css`
    display: none;
`;

export const instructions = () => css`
    width: 100%;
    max-width: 250px;
    padding: 5px;
    background: rgba(0, 0, 0, 0.5);
    color: white;
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