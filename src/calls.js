import { getRequest, postRequest } from './requests'

export const postAnyStuff = (url, printer) => {
    const messageBody = {
        url,
    }
    const header = {
        'Content-Type': 'application/json',
    }
    postRequest(
        '/...',
        messageBody,
        (response, status) => {
            console.log(`${response.message}`)
        },
        () => {
            console.error('Invalid Operation!')
            alert('Invalid Operation!')
        },
        header,
    )
}

export const getAnyStuff = printer => {
    const header = {
        'Content-Type': 'application/json',
    }
    getRequest(
        '/...',
        (response, status) => {
            console.log(response.message)
        },
        () => {
            console.error('Invalid Operation!')
            alert('Invalid Operation!')
        },
        header,
    )
}

export default getAnyStuff
