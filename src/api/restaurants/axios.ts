import Axios from 'axios'
import { FQS_API_KEY } from '../../consts/API_KEYS'

export const axios = Axios.create({
    headers: {
        Authorization: FQS_API_KEY,
        accept: 'application/json'
    }
})