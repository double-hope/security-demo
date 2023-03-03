import { css } from '@emotion/react';
const back = require('assets/images/back.jpg')

export const wrapper = () => css`
    width: 100%;
    min-height: 100vh;
`;

export const layout = () => css`
    background-image: url(${back});
    background-size: cover; 
    background-attachment: fixed;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-auto-rows: 100vh;
`;

export const aside = () => css`
    height: 100%;
`;

export const signForm = () => css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #a9abba;
    font-weight: 900;
    width: 100%;
    height: 100%;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(29deg, transparent 50%, #755efe);
    }

    &:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: linear-gradient(15deg, #a499ff 0%, transparent 50%);
    }

    & * {
        z-index: 1;
    }
`;

export const small = () => css`
    font-size: 10px;
    max-width: 150px;
    text-align: center;
    line-height: 15px;
    margin-bottom: 15px;
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