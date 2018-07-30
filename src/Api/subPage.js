import { request } from './request';

export function getLeagueList() {
    return request('/mock/subPage/leagueList');
}

export function getSubTeamList() {
    return request('/mock/subPage/team');
}
