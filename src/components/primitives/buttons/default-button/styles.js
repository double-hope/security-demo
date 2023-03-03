import { css } from '@emotion/react';
import { ButtonColorEnum, ButtonShapeEnum, ButtonSizeEnum } from 'common/enums';

export const button = () => css`
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

    &[button-color=${ButtonColorEnum.PRIMARY}] {
        background-color: #3361FF;
        border: 2px solid #3361FF;
        color: white;

        & svg {
            color: #FFFFFF;
        }
    }

    &[button-color=${ButtonColorEnum.LIGHT}] {
        background-color: #FFFFFF;
        box-shadow: 0px 2px 5px rgba(38, 51, 77, 0.03);
        border: 2px solid #F5F6F7;
        color: #6B7A99;

        & svg {
            color: #C3CAD9;
        }
    }

    &[button-color=${ButtonColorEnum.DARK}] {
        background: #202B40;
        border: 2px solid #2D3C59;
        color: #7D8FB3;

        & svg {
            color: #4D5E80;
        }
    }

    &[button-size=${ButtonSizeEnum.LARGE}] {
        border-radius: 30px;
        padding: 15px 25px;
        max-width: 173px;
        font-size: 14px;
        line-height: 30px;
    }

    &[button-size=${ButtonSizeEnum.DEFAULT}] {
        border-radius: 30px;
        padding: 10px 20px;
        max-width: 157px;
    }

    &[button-size=${ButtonSizeEnum.SMALL}] {
        border-radius: 20px;
        padding: 6px 15px;
        max-width: 133px;
    }

    &[button-size=${ButtonSizeEnum.EXTRA_SMALL}] {
        border-radius: 20px;
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
`;