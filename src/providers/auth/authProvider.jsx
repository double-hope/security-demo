import { AuthContext } from 'context';
import { useState } from 'react';

const AuthProvider = ({ children }) => {
    const initialState = {
        user: null,
        accessToken: ''
    }

    const [auth, setAuth] = useState(initialState);
    const authProvidedValue = { auth, setAuth };

    return (
        <AuthContext.Provider value={authProvidedValue}>{children}</AuthContext.Provider>
    )
}

export { AuthProvider };