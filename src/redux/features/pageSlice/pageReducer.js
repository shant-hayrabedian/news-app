import { LOAD_MORE, RESET, CHANGE_ORDER} from './constants'


export const initialPageSize = {
    page: 1,
    order: "latest" //!!
}




export const loadMoreArticles = (state = initialPageSize, action) => {
    switch (action.type) {
        case LOAD_MORE:
            return { ...state, page: state.page + action.payload };
        case RESET:
            return { ...state, page: action.payload }
        case CHANGE_ORDER:
            return { ...state, order: action.payload }  ///!!
        default:
            return state
    }

}