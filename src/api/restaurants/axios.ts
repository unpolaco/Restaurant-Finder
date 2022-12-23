import Axios from 'axios'

export const axios = Axios.create({
    headers: {
        accept: 'application/json, text/plain, */*',
        'Access-Control-Allow-Origin': '*'
    }
})