import { AuthContext } from 'context/auth';
import { useContext } from 'react';

const useAuth = () => {
    return useContext(AuthContext);
}

export { useAuth };