import {FETCH_SOURCES} from './constants'

export const initialSourcesState = {
    sources: []
}

export const fetchNews = (state = initialSourcesState, action) => {
    switch (action.type) {
        case FETCH_SOURCES:
            return { ...state, sources: action.payload};
        default:
            return state
    }

}

