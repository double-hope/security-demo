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
    position: absolute;
    top: 5px;
    right: 6px;
    color: green;
`;

export const invalid = () => css`
    display: inline;
    position: absolute;
    top: 5px;
    right: 6px;
    color: red;
`;

export const hide = () => css`
    display: none;
`;

export const instructions = () => css`
    position: absolute;
    bottom: 0;
    width: 100%;
    color: red;
    font-size: 10px;
    font-weight: 800;
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