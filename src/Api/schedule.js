import { request } from './request';

export function getPopularList() {
    return request('/mock/schedule/popularList');
}
