import React, { ReactNode, createContext, useReducer, useContext } from 'react';
import { Platform } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import Cookie from 'js-cookie';
import { Redirect } from '../../components/Atoms/Redirect/Redirect';

interface AuthContextState {
  isLogin: boolean;
}

export const authStorage = () => {
  if (Platform.OS === 'web') {
    return {
      get: Cookie.get,
      set: Cookie.set,
      remove: Cookie.remove,
    };
  } else {
    return {
      get: SecureStore.getItemAsync,
      set: SecureStore.setItemAsync,
      remove: SecureStore.deleteItemAsync,
    };
  }
};

const authReducer = (
  state: AuthContextState,
  action: {
    type: string;
  },
) => {
  switch (action.type) {
    case 'LOGIN':
      authStorage().set('token', 'some_token');
      return {
        ...state,
        isLogin: true,
      };
    case 'LOGOUT':
      authStorage().remove('token');
      return {
        ...state,
        isLogin: false,
      };
    default:
      authStorage().remove('token');
      return {
        ...state,
        isLogin: false,
      };
  }
};

export const AuthContextDefaultState = {
  isLogin: false,
};

export const AuthContext = createContext<{
  state: typeof AuthContextDefaultState;
  dispatch: React.Dispatch<{
    type: string;
  }>;
}>({ state: AuthContextDefaultState, dispatch: () => null });

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, AuthContextDefaultState);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthProvider = () => useContext(AuthContext);

export const withAuth = (Component: JSX.Element) => {
  return (
    <AuthContext.Consumer>
      {(context) => {
        if (context.state.isLogin) return Component;
        else return <Redirect />;
      }}
    </AuthContext.Consumer>
  );
};
