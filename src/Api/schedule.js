import { request } from './request';

export function getPopularList() {
    return request('/mock/schedule/popularList');
}

export function getMonthList(params) {
    return request('/mock/schedule/monthList', {
        params: {
            year: params.year,
            month: params.month
        }
    });
}
