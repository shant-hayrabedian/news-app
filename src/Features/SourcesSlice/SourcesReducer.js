import {FETCH_SOURCES} from '../CONSTANTS'

export const initialSourcesState = {}

export const fetchNews = (state = initialSourcesState, action) => {
    switch (action.type) {
        case FETCH_SOURCES:
            return { ...state, sources: action.payload};
        default:
            return state
    }

}

