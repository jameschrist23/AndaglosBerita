import { SET_NEWS } from './actionTypes.js'

export const setNews = (data) => {
    return {
        type: SET_NEWS,
        payload: data
    }
}