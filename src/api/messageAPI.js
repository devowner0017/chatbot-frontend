import {$host} from './index'

export const sendMessageRegisteredUser = async (userId, chatMessage) => {
    try {
        const {data} = await $host.post('/api/send_message/send_registered', {
            userId, chatMessage
        })
        return data
    } catch(err) {
        console.log(err)
    }
}

export const sendMessageNotRegisteredUser = async (chatMessage) => {
    try {
        const {data} = await $host.post('/api/send_message/send_not_registered', {
            chatMessage
        })
        return data
    } catch(err) {
        console.log(err)
    }
}

export const saveChatHistory = async (userId, chatHistory) => {
    const {data} = await $host.post('/api/send_message/save-chat-history', {
        userId, chatHistory
    })
    return data
}
