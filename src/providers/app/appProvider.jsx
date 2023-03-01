import { combineComponents } from 'utils/combineComponents';
import { AuthProvider } from 'providers/auth';

const providers = [
    AuthProvider,
]

export const AppProvider = combineComponents(providers);