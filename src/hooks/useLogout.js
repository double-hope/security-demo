import { useAuth } from './useAuth';

const useLogout = () => {
    const { setAuth } = useAuth();

    const logout = async () => {
        setAuth({});
    }

    // add logout from backend side

    return logout;
}

export { useLogout };