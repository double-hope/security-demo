import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { auth as authService } from 'services';
import { auth } from './rootReducer';

const middleware = getDefaultMiddleware({
    serializableCheck: false,
    thunk: {
        extraArgument: {
            authService,
        }
    }
});

const store = configureStore({
    reducer: combineReducers({
        auth,
    }),
    middleware,
});

export { store };