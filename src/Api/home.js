import { request } from './request';

export function getLiveTrail() {
    return request('/mock/home/recommend/liveTrail');
}
export function getFocusList() {
    return request('/mock/home/recommend/focusList');
}
export function getHotGameCount() {
    return request('/mock/home/recommend/hotGameCount');
}
