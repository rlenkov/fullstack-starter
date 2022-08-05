import axios from 'axios'
import { ResponseCallback, Message } from '../types'

export const getRequest = (
    path: string,
    success: ResponseCallback,
    failed: ResponseCallback,
    headers = {
        'Content-Type': 'application/json',
    },
) => {
    axios
        .get(path, { headers })
        .then(response => {
            success(response.data)
            return response.data
        })
        .catch(error => {
            console.error(error)
            failed(error)
            return error
        })
}

export const postRequest = async (
    path: string,
    messageBody: Message,
    success: ResponseCallback,
    failed: ResponseCallback,
    headers = {
        'Content-Type': 'application/json',
    },
) => {
    const response = await axios
        .post(path, messageBody, {
            headers,
        })
        .then(response => {
            success(response.data)
            return response.data
        })
        .catch(error => {
            failed(error)
            return error
        })
    return response
}
