import { request } from './request';

export function getAddress() {
    return request(`/mock/addressResult`, {
        noStatus: true
    });
}
