import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { auth as authService } from 'services';
import { oAuth as oAuthService } from 'services';
import { auth, oAuth } from './rootReducer';

const middleware = getDefaultMiddleware({
    serializableCheck: false,
    thunk: {
        extraArgument: {
            authService,
            oAuthService,
        }
    }
});

const store = configureStore({
    reducer: combineReducers({
        auth,
        oAuth,
    }),
    middleware,
    // uncomment in prod
    // devTools: false 
});

export { store };