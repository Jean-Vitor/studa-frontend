import React, { createContext, useState, useEffect } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { login } from '../services/auth'
const TOKEN_KEY = "@studa:token";
const USER_KEY = "@studa:user";

export const AuthContext = createContext({});
export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    useEffect(() => {
        async function loadStoragedData() {
            const storagedToken = await AsyncStorage.getItem(TOKEN_KEY);
            const storagedUser = await AsyncStorage.getItem(USER_KEY);

            if (storagedUser && storagedToken) {
                setUser(JSON.parse(storagedUser))
            }
        }

        loadStoragedData()
    }, [])

    const signIn = async (payload) => {
        const { token, user } = await login(payload)
        setUser(user)
        AsyncStorage.setItem(TOKEN_KEY, token);
        AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
    }

    const signOut = () => {
        setUser(null)
        AsyncStorage.clear();
    }

    const [icon, setIcon] = useState(1)

    return (
        <AuthContext.Provider value={{signed: !!user, user, icon, setIcon, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}