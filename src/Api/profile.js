import { request } from './request';

export function getAddress() {
    return request(`/mock/addressResult`, {
        noStatus: true
    });
}

export function validateNickname(name) {
    return name === 'Yhspehy';
}

export function changeInfo(options) {
    return request(`/mock/addressResult`, options);
}
