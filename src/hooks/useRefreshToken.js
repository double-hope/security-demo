import { useDispatch, useSelector } from "react-redux";
import { refreshToken } from "store/auth";

const { useAuth } = require("./useAuth");

const useRefreshToken = () => {
    const { setAuth } = useAuth();
    const dispatch = useDispatch();
    const { tokens } = useSelector(state => state.auth);

    const refresh = async () => {
        await dispatch(refreshToken({refreshToken: tokens?.refreshToken}));

        setAuth(prev => {
            return {
                ...prev,
                accessToken: tokens?.accessToken
            }
        });
        return tokens?.accessToken;
    }
    return refresh;
};

export { useRefreshToken };