import { FETCH_BY_SINGLE_SELECTED_SOURCE_ARTICLES, TO_EMPTY_SINGLE_SOURCE} from './constants'


export const initialArticlesState = {
    articles: [],
}



export const getArticlesForSingleSource = (state = initialArticlesState, action) => {
    switch (action.type) {
        case FETCH_BY_SINGLE_SELECTED_SOURCE_ARTICLES:
            return { ...state, articles: [...action.payload, ...state.articles]};
            case  TO_EMPTY_SINGLE_SOURCE:
            return {articles: action.payload};
        default:
            return state
    }

}



