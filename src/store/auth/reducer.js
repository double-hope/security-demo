import { DataStatusEnum } from 'common';
import { createReducer } from '@reduxjs/toolkit';
import { signIn, signUp } from './actions';

const initialState = {
    user: null,
    token: null,
    message: null,
    status: DataStatusEnum.IDLE
}

const reduser = createReducer(initialState, (builder) => {
    
    builder.addCase(signIn.pending, (state) => {
        state.status = DataStatusEnum.PENDING;
    });

    builder.addCase(signIn.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.user = user;
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

});

export { reduser };