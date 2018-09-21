import { request } from './request';

export function getNewInfo(id) {
    return request(`/mock/news/newInfo/${id}`);
}
