import {FETCH_SOURCES, TO_EMPTY_SOURCE} from './constants'

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

