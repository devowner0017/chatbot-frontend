import {$host} from './index'

export const getQuestionnaire = async () => {
    const {data} = await $host.get('/api/questionnaire/get_questions')
    return data
}

export const createQuestionnaire = async (questionId, questionList) => {
    const {data} = await $host.post('/api/questionnaire/create_questions', {
        questionId, questionList
    })
    return data
}
