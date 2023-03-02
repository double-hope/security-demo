import { DataStatusEnum } from 'common';
import { createReducer } from '@reduxjs/toolkit';
import { signIn, signUp, refreshToken } from './actions';

const initialState = {
    user: null,
    tokens: [],
    message: null,
    status: DataStatusEnum.IDLE
}

const reduser = createReducer(initialState, (builder) => {
    
    builder.addCase(signIn.pending, (state) => {
        state.status = DataStatusEnum.PENDING;
    });

    builder.addCase(signIn.fulfilled, (state, { payload }) => {
        const { tokens } = payload;
        state.tokens = tokens;
        state.status = DataStatusEnum.SUCCESS;
    });

    builder.addCase(signUp.pending, (state) => {
        state.status = DataStatusEnum.PENDING;
    });

    builder.addCase(signUp.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.user = user;
        state.status = DataStatusEnum.SUCCESS;
    });

    builder.addCase(signUp.rejected, (state, { error }) => {
        const { message } = error;
        state.message = message;
        state.status = DataStatusEnum.ERROR;
    });

    builder.addCase(refreshToken.pending, (state) => {
        state.status = DataStatusEnum.PENDING;
    });

    builder.addCase(refreshToken.fulfilled, (state, { payload }) => {
        const { tokens } = payload;
        state.tokens = tokens;
        state.status = DataStatusEnum.SUCCESS;
    });

});

export { reduser };