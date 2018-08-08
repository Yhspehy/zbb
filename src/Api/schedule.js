import { request } from './request';

export function getPopularList() {
    return request('/mock/schedule/popularList');
}

export function getFollowList() {
    return request('/mock/schedule/followList');
}

export function getMonthList(params) {
    return request('/mock/schedule/monthList', {
        params: {
            year: params.year,
            month: params.month
        }
    });
}

export function getTeamRank(id) {
    return request(`/mock/schedule/${id}/rank/team`);
}

export function getPlayerRank(id) {
    return request(`/mock/schedule/${id}/rank/player`);
}

export function getPlayoff(id) {
    return request(`/mock/schedule/${id}/playoff`);
}
