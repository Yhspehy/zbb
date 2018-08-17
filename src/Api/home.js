import { request } from './request';

export function getLiveTrail() {
    return request('/mock/home/recommend/liveTrail');
}
export function getPointNews() {
    return request('/mock/home/recommend/pointNews');
}
export function getFocusList() {
    return request('/mock/home/recommend/focusList');
}
export function getNewsList() {
    return request('/mock/home/recommend/newsList');
}
export function getHotGameCount() {
    return request('/mock/home/recommend/hotGameCount');
}
