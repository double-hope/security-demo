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
    background: linear-gradient(45deg, #00c9e5, #00c0ed, #00b6f3, #00abf7, #009ef8, #55a0f8, #78a2f7, #92a5f5, #b3baf7, #d0d0fa, #e9e7fc, #ffffff);
    background-size: 400%;
    font-weight: 900;
    width: 100%;
    height: 100%;
    animation: bg-animation 10s infinite alternate;

    @keyframes bg-animation {
        0% {
            background-position: left;
        }
        100% {
            background-position: right;
        }
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