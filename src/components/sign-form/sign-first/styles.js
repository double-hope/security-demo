import { css } from '@emotion/react';
const back = require('assets/images/back.jpg')

export const wrapper = () => css`
    width: 100%;
    min-height: 100vh;
`;

export const layout = () => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 100vh;
    background: linear-gradient(
        45deg, 
        #0d02f595, 
        #1dc3c795, 
        #a834a095, 
        #ea433595
        ), url(${back}) center center fixed;
    background-size: cover; 
    background-attachment: fixed;
    @media all and (max-width: 900px) {
        & {
            grid-template-columns: 1fr;
        }
    }
`;

export const aside = () => css`
    height: 100%;
    @media all and (max-width: 900px) {
        & {
            display: none;
        }
    }
`;

export const signForm = () => css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    font-weight: 900;
    width: 100%;
    height: 100%;
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