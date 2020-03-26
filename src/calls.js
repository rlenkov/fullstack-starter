import { getRequest, postRequest } from './requests'

export const getDetails = success => {
    const header = {
        'Content-Type': 'application/json',
    }
    getRequest(
        '/demo/',
        (response, status) => {
            console.log(response.message)
            success(response.message)
        },
        () => {
            console.error('Invalid Operation!')
            alert('Invalid Operation!')
        },
        header,
    )
}

export const rollDice = (dice, success) => {
    const messageBody = {
        dice,
    }
    const header = {
        'Content-Type': 'application/json',
    }
    postRequest(
        '/demo/roll',
        messageBody,
        (response, status) => {
            console.log(response.result)
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
