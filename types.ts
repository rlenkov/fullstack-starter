export interface Message {
    result: number
    message: string
}

export type ResponseCallback = (response: any) => any

export default Message
