import { FETCH_BY_SINGLE_SELECTED_SOURCE_ARTICLES, TO_EMPTY_SINGLE_SOURCE} from './constants'


export const initialArticlesState = {
    articles: [],
    // order: "newest"
}



export const getArticlesForSingleSource = (state = initialArticlesState, action) => {
    switch (action.type) {
        case FETCH_BY_SINGLE_SELECTED_SOURCE_ARTICLES:
            return { ...state, articles: [...state.articles, ...action.payload]};
            case  TO_EMPTY_SINGLE_SOURCE:
            return {...state, articles: action.payload};
            case 'newest':
                return {...state, articles:[...state.articles, ...action.payload ]}
            case 'oldest':
                return {...state,  articles: [ ...state.articles, ...action.payload]}
            // case "changeOrder":
            //     return {...state, order: action.payload}
        default:
            return state
    }

}



