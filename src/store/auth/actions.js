import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionType, PathType } from './common';

const signIn = createAsyncThunk(ActionType.SIGN_IN, async (params, { extra }) => ({
    user: await extra.authService.signIn(PathType.SIGN_IN, {
        ...params
    }),
}));

const signUp = createAsyncThunk(ActionType.SIGN_UP, async (params, { extra }) => ({
    user: await extra.authService.signUp(PathType.SIGN_UP, {
        ...params
    }),
}));

const refreshToken = createAsyncThunk(ActionType.REFRESH_TOKEN, async (params, { extra }) => ({
    token: await extra.authService.signUp(PathType.REFRESH_TOKEN, {
        ...params
    }),
}));

export { signIn, signUp, refreshToken };