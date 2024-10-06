import { httpService } from './http.service'

export const msgService = {
    post
}


async function post(msg) {
    const savedMsg = await httpService.post('msg', msg)
    return savedMsg
}

