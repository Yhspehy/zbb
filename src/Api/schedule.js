import { request } from './request';

export function getPopularList(params) {
    return request('/mock/schedule/popularList', params);
}
export function getPopularListBefore(params) {
    return request('/mock/schedule/popularListBefore', params);
}
export function getPopularListAfter(params) {
    return request('/mock/schedule/popularListAfter', params);
}

export function getGroupPic() {
    return request('/mock/schedule/groupPic');
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
    return request(`/mock/schedule/rank/team/${id}`);
}

export function getPlayerRank(id) {
    return request(`/mock/schedule/rank/player/${id}`);
}

export function getPlayoff(id) {
    return request(`/mock/schedule/playoff/${id}`);
}
