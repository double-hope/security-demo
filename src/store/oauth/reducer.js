import { createReducer } from '@reduxjs/toolkit';
import{ DataStatusEnum } from 'common/enums';
import { authorize } from './actions';

const initialState = {
    user: null,
    status: DataStatusEnum.IDLE,
}

const reducer = createReducer(initialState, (builder) => {

    builder.addCase(authorize.pending, (state) => {
        state.status = DataStatusEnum.PENDING;
    });

    builder.addCase(authorize.fulfilled, (state, {payload}) => {
        const { user } = payload;
        state.user = user;
        state.status = DataStatusEnum.SUCCESS;
    });

});

export { reducer };