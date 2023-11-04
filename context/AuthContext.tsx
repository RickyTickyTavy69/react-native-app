import {createContext, useContext, useState, useEffect} from "react";
import axios from "axios";
import * as secureStore from "expo-secure-store";
import {SignUp, PostUser} from "../api/authApi";
import {LogInUser, RegisterUser} from "../api/api.types";

interface AuthProps{
    authState: {token: string | null, authenticated: boolean | null};
    onRegister: (userData : RegisterUser) => Promise<any>;
    onLogin: (logInData: LogInUser) => Promise<any>;
    onLogOut: () => Promise<any>;
}

const TOKEN_KEY = "my-jwt";
const AuthContext = createContext<AuthProps>({});

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({children}: any) => {
    const [authState, setAuthState] = useState<{
        token: string | null;
        authenticated: boolean | null;
    }>({token: null, authenticated: null});

    useEffect(() => {
        const loadToken = async () => {
            const token = await secureStore.getItemAsync(TOKEN_KEY);
            if(token){
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                setAuthState({
                    token: token,
                    authenticated: true,
                })
            }
        }
        loadToken();
    }, []);

    const LogIn = async (logInData: LogInUser) => {
        try{
            const response = await SignUp(logInData);
            setAuthState({
                token: response.data.accessToken,
                authenticated: true,
            })
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
            await secureStore.setItemAsync(TOKEN_KEY, response.data.accessToken);

            return response;
        }catch (e) {
            return {error: true, msg: (e as any).response.data.msg};
        }
    }

    const LogOut = async () => {
        await secureStore.deleteItemAsync(TOKEN_KEY);
        axios.defaults.headers.common['Authorization'] = "";
        setAuthState({
            token: null,
            authenticated: false,
        })
    }

    const value = {
        onRegister: PostUser,
        onLogin: LogIn,
        onLogOut: LogOut,
        authState: authState,
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}