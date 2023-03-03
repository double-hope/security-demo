import { css } from '@emotion/react';

export const modalWrapper = () => css`
  position: fixed;
  z-index: 100;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(13, 17, 26, 0.81);
  backdrop-filter: blur(1px);
`;

export const modalContent = () => css`
  position: relative;
  border-radius: 5px;
  width: fit-content;
  height: fit-content;
  padding: 50px;
  background: #F7F8FA;
  box-sizing: border-box;
  max-width: 100vw;
`;