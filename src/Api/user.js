import {
    request
} from './request'



export function loginByUserName(username, password) {
    const params = {
        username: username,
        password: password
    }

    return request('/mock/login', {
        params
    })
}