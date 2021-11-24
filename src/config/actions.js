import AsyncStorage from "@react-native-async-storage/async-storage";
import api from '../config/api';

const TOKEN_KEY = "@studa:token";

export const add = async (ref, data) => {
    const token = await AsyncStorage.getItem(TOKEN_KEY)

    api.post(`/${ref}`, data, {headers: {'Authorization': `bearer ${token}`}})
    .then(res => {
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}

export const get = async (ref) => {
    const token = await AsyncStorage.getItem(TOKEN_KEY)
    try {
        const res = await api.get(`/${ref}`, {headers: {'Authorization': `bearer ${token}`}})
        console.log(res.data)
        return res.data
    }
    catch (err) {
        console.log(err)
    }
}