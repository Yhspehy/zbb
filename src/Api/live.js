import { request } from './request';

export function getReview(id) {
    return request(`/mock/live/${id}/review`);
}

export function getHotComments(id) {
    return request(`/mock/live/${id}/hotComments`);
}

export function getStats(id) {
    return request(`/mock/live/${id}/stats`);
}
