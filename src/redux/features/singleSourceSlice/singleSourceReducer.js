import {FETCH_BY_SINGLE_SELECTED_SOURCE_ARTICLES} from './constants'


export const initialArticlesState = {

}

export const getArticlesForSingleSource = (state = initialArticlesState, action) => {
    switch (action.type) {
        case FETCH_BY_SINGLE_SELECTED_SOURCE_ARTICLES:
            return { ...state, articles: action.payload};
        default:
            return state
    }

}

// export const clickedState = {
//     clicked: false
// }

// export const clickingReducer = (state = clickedState, action) => {
//     debugger;
//     switch (action.type){
//         case "CLICKED":
//             return {...state, clicked: action.payload};
//         default: 
//         return state
//     }
// }


