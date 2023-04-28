import {$host} from './index'

export const checkUser = async (userId, userEmail) => {
    try {
        const {data} = await $host.post('/api/check_user/check_user', {
            userId, userEmail
        })
        return data
    } catch(err) {
        console.log(err)
    }
}

export const updateUserQuestionHistory = async (userId, isIntroductionQuestion, introductionQuestionNumber) => {
    try {
        const {data} = await $host.post('/api/check_user/update_queqstion_history', {
            userId, isIntroductionQuestion, introductionQuestionNumber
        })
        return data
    } catch(err) {
        console.log(err)
    }
}

export const getUserQuestionHistory = async (userId) => {
    try {
        const {data} = await $host.post('/api/check_user/get_queqstion_history', {
            userId
        })
        return data
    } catch(err) {
        console.log(err)
    }
}