import getAxiosInstance from './'

export const signIn = (data) => {
    const axios = getAxiosInstance();
    return axios.post('users/sign_in', data)
}

export const getLogs = (lines) => {
    const axios = getAxiosInstance();
    return axios({
        method: 'GET',
        url: `/logs`,
        params: {
            lines,
        }
       
    })
}

