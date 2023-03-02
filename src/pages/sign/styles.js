import { css } from '@emotion/react';

export const wrapper = () => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
`;

export const signForm = () => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const google = () => css`
    &:hover path {
        fill: #34a853;
    }
`;

export const facebook = () => css`
    &:hover path {
        fill: #4267B2;
    }
`;