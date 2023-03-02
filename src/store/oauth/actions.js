import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionType, PathType } from './common';

const authorize = createAsyncThunk(ActionType.AUTHORIZE, async (params, { extra }) => ({
    user: await extra.oAuthService.authorize(PathType.AUTHORIZE, {
        ...params
    }),
}));

export { authorize };