import { css } from '@emotion/react';
import { ResetButtonTypeEnum } from 'common/enums';

export const button = () => css`
    all: unset;
    text-decoration: underline;
    cursor: pointer;   
    font-weight: 500;
    margin-bottom: 15px;
    z-index: 1;

    &[button-type=${ResetButtonTypeEnum.BOLD}] {
        text-decoration: none;
        font-weight: 900;
        color: #ADB8CC;
    }
`;