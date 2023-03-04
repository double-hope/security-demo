import { css } from '@emotion/react';
import { ButtonColorEnum, ButtonShapeEnum, ButtonSizeEnum } from 'common/enums';

export const button = (color, radius) => css`
position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    width: 100%;
    margin: 10px 0;
    font-weight: 900;
    font-size: 12px;
    line-height: 20px;
    cursor: pointer;
    background-color: ${color};
    border-radius: ${radius};

    &[button-color=${ButtonColorEnum.PRIMARY}] {
        border: 2px solid #3361FF;
        color: white;

        & svg {
            color: #FFFFFF;
        }
    }

    &[button-color=${ButtonColorEnum.LIGHT}] {
        box-shadow: 0px 2px 5px rgba(38, 51, 77, 0.03);
        border: 2px solid #F5F6F7;
        color: #6B7A99;

        & svg {
            color: #C3CAD9;
        }
    }

    &[button-color=${ButtonColorEnum.DARK}] {
        border: 2px solid #2D3C59;
        color: #7D8FB3;

        & svg {
            color: #4D5E80;
        }
    }

    &[button-size=${ButtonSizeEnum.LARGE}] {
        padding: 15px 25px;
        max-width: 173px;
        font-size: 14px;
        line-height: 30px;
    }

    &[button-size=${ButtonSizeEnum.DEFAULT}] {
        padding: 10px 20px;
        max-width: 157px;
    }

    &[button-size=${ButtonSizeEnum.SMALL}] {
        padding: 6px 15px;
        max-width: 133px;
    }

    &[button-size=${ButtonSizeEnum.EXTRA_SMALL}] {
        padding: 3px 10px;
        max-width: 109px;
        font-size: 10px;
    }

    &[button-shape=${ButtonShapeEnum.RECTANGLE}] {
        border-radius: 5px;
    }

    &:disabled {
        background-color: #b0b3b8;
        border: 2px solid #b0b3b8;
        color: #575859;
        cursor: not-allowed;

        & svg {
            color: #78797a;
        }
    }

    &:after {
        content: '';
        position: absolute;
        border-radius: ${radius};
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: transparent;
    }

    &:active::after {
        animation: gradient 150ms;
    }

    @keyframes gradient {
        0% {
            background: radial-gradient(circle at center, rgba( 0, 0 , 0, 0 ) 0%, ${color} 0%, ${color} 100%);
        }
        25% {
            background: radial-gradient(circle at center, rgba( 0, 0, 0, 0.1 ) 24%, ${color} 25%, ${color} 100%);
        }
        50% {
            background: radial-gradient(circle at center, rgba( 0, 0, 0, 0.2 ) 49%, ${color} 50%, ${color} 100%);
        }
        75% {
            background: radial-gradient(circle at center, rgba( 0, 0, 0, 0.3 ) 74%, ${color} 75%, ${color} 100%);
        }
        100% {
            background: radial-gradient(circle at center, rgba( 0, 0, 0, 0.4 ) 99%, ${color} 100%, ${color} 100%);
        }
    }

    & * {
        z-index: 1;
    }

    &[button-stretched='true'] {
        max-width: 300px;
    }
`;