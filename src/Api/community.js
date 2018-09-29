import { request } from './request';

export function getSwiper() {
    return request('/mock/community/recommend/swiper');
}

export function getRecommendList() {
    return request('/mock/community/recommend/list');
}

export function getCircleAll() {
    return request('/mock/community/circle/all');
}
