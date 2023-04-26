import {$host} from './index'

export const sendMessage = async (userId, chatContent) => {
    const {data} = await $host.post('/api/send_message/send', {
        userId, chatContent
    })
    return data
}

export const fetchMessage = async () => {
    const {data} = await $host.get('api/')
    return data
}