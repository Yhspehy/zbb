export function saveToLocal(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
}

export function loadFromLocal(key) {
    return JSON.parse(window.localStorage.getItem(key));
}