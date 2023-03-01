import { DataStatusEnum } from 'common';
import { createReducer } from '@reduxjs/toolkit';
import { signIn } from './actions';

const initialState = {
    user: null,
    status: DataStatusEnum.IDLE
}

const reduser = createReducer(initialState, (builder) => {
    
    builder.addCase(signIn.pending, (state) => {
        state.status = DataStatusEnum.PENDING;
    });

    builder.addCase(signIn.fulfilled, (state, {payload}) => {
        const { user } = payload;
        state.user = user;
        state.status = DataStatusEnum.SUCCESS;
    });
});

export { reduser };