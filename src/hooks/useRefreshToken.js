import { useAuth } from './useAuth';
import { useSelector } from 'react-redux';

const useRefreshToken = () => {
    const { setAuth } = useAuth();
    const { accessToken } = useSelector(state => state.auth);

    const refresh = async () => {
        // const response = dispatch(refresh({}, contentType: {credentials: 'include'}))

        // setAuth(prev => ({...prev, accessToken }));
        return accessToken;
    }

  return useRefreshToken;
}

export { useRefreshToken };