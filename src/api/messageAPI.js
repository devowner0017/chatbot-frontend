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


export const sendQuestionResRegisteredUser = async (userId, introductionQuestionNumber, userChatHistory) => {
    try {
        const {data} = await $host.post('/api/send_message/answered_question_registered', {
            userId, introductionQuestionNumber, userChatHistory
        })
        return data
    } catch(err) {
        console.log(err)
    }
}

export const sendQuestionnaireFinishedRegisteredUser = async (userId, introductionQuestionNumber, userChatHistory, isIntroductionQuestion) => {
    try {
        const {data} = await $host.post('/api/send_message/all_answered_questions_registered', {
            userId, introductionQuestionNumber, userChatHistory, isIntroductionQuestion
        })
        return data
    } catch(err) {
        console.log(err)
    }
}

export const sendQuestionnaireFinishedNotRegisteredUser = async (userChatHistory) => {
    try {
        const {data} = await $host.post('/api/send_message/all_answered_questions_not_registered', {
            userChatHistory
        })
        return data
    } catch(err) {
        console.log(err)
    }
}
