import { css } from '@emotion/react';

export const inputWrapper = () => css`
    box-shadow: 0px 2px 5px rgba(38, 51, 77, 0.03);
    padding: 5px 6px;
    border: 1px solid #bfbfbf;
    border-radius: 5px;
    box-shadow: 0 0 5px #85858560;
    background: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 10px;
    width: 100%;
    max-width: 300px;
    color: #6B7A99;
    font-weight: 900;
    font-size: 10px;
    line-height: 15px;
`;

export const input = () => css`
    margin: 5px 0;
    width: 100%;
    max-width: 200px;
    border: none;
    border-bottom: 2px solid #6B7A99;

    &:focus {
        outline: red;
    }
`;