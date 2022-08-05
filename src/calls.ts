import { getRequest, postRequest } from './requests'
import { ResponseCallback, Message } from '../types'

export const getDetails = (success: ResponseCallback) => {
    const header = {
        'Content-Type': 'application/json',
    }
    getRequest(
        '/demo/',
        (response: Message) => {
            success(response.message)
        },
        () => {
            console.error('Invalid Operation!')
            alert('Invalid Operation!')
        },
        header,
    )
}

export const rollDice = (dice: number, success: ResponseCallback) => {
    const messageBody: Message = {
        result: dice,
        message: '',
    }
    const header = {
        'Content-Type': 'application/json',
    }
    postRequest(
        '/demo/roll',
        messageBody,
        (response: Message) => {
            success(response.result)
        },
        error => {
            console.error('Invalid Operation!')
            alert(error.response.data.message)
        },
        header,
    )
}

export default getDetails
