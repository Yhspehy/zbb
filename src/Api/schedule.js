import { request } from './request';

export function getPopularList() {
    return request('/mock/schedule/popularList');
}

export function getMonthList() {
    return request('/mock/schedule/monthList');
}
