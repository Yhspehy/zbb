import { request } from './request';

export function getReview(id) {
    return request(`/mock/live/${id}/review`);
}
