import { createContext } from 'react';

const initialState = {
    user: null,
    accessToken: ''
}

export const AuthContext = createContext(initialState);
