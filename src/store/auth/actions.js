import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionType, PathType } from './common';

const signIn = createAsyncThunk(ActionType.SIGN_IN, async (params, { extra }) => ({
    user: await extra.authService.signIn(PathType.SIGN_IN, {
        ...params
    }),
}));

export { signIn };