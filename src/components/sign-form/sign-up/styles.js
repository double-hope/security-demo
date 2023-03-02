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
    padding: 10px;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border-radius: 10px;
`;

export const offscreen = () => css`
    display: none;
`;

export const errmsg = () => css`
    color: red;
`;

export const warning = () => css`
    color: #ffd000;
`;

export const line = () => css`
    text-decoration: underline;
`;