import api from '../config/api';

export const register = async (data) => {
    api.post('/register', data)
    .then(res => {
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}

export const login = async (data) => {
    try {
        const res = await api.post('/login', data)
        return res.data
    }
    catch (err) {
        console.log(err)
    }
}