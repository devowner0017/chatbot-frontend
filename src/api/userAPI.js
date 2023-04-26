import {$host} from './index'

export const checkUser = async (userId, userEmail) => {
    try {
        const {data} = await $host.post('/api/check_user/user', {
            userId, userEmail
        })
        return data
    } catch(err) {
        console.log(err)
    }
}
