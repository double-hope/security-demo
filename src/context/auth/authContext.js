import { createContext } from 'react';

const initialState = {
    user: '',
    password: '',
    roles: [],
    accessToken: ''
}

export const AuthContext = createContext(initialState);
