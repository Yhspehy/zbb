import { request } from './request';

export function loginByUserName(username, password) {
    const data = {
        username: username,
        password: password
    };

    return request('/mock/login', {
        data: data
    });
}
