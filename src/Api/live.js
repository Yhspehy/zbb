import { request } from './request';

export function getReview(id) {
    return request(`/mock/live/review/${id}`);
}

export function getHotComments(id) {
    return request(`/mock/live/hotComments/${id}`);
}

export function getStats(id) {
    return request(`/mock/live/stats/${id}`);
}

export function getLiveRoom(id) {
    return request(`/mock/live/liveRoom/${id}`);
}

export function getQuizList(id) {
    return request(`/mock/live/quizList/${id}`);
}
