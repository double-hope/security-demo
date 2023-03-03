import jwtDecode from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { refreshToken } from 'store/auth';
import { useAuth } from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();
    const dispatch = useDispatch();
    const { tokens } = useSelector(state => state.auth);

    const refresh = async () => {
        await dispatch(refreshToken({refreshToken: tokens?.refreshToken}));

        const jwt = jwtDecode(tokens?.accessToken);

        setAuth(prev => {
            return {
                ...prev,
                roles: jwt?.roles,
                accessToken: tokens?.accessToken
            }
        });
        return tokens?.accessToken;
    }
    return refresh;
};

export { useRefreshToken };