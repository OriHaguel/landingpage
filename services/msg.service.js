import { httpService } from './http.service'

const KEY = 'msgDB'

export const msgService = {
    post
}

function post(msg) {
    const savedMsg = _saveToStorage(KEY, msg)
    return savedMsg
}

function _saveToStorage(key, newMsg) {
    let messages = JSON.parse(localStorage.getItem(key)) || [];
    messages.push(newMsg);
    localStorage.setItem(key, JSON.stringify(messages));
    return messages; // Return the updated list
}

// async function post(msg) {
//     const savedMsg = await httpService.post('msg', msg)
//     return savedMsg
// }