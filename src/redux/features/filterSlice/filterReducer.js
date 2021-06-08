import {
    SHOW_FILTER_CC,
    HIDE_FILTER_CC,
    HIDE_FILTER_SOURCE,
    SHOW_FILTER_SOURCE,
    SET_SELECTED_CATEGORIES_IDES
} from './constants'

export const initialFilterState = {
    sourceVisible: true,
    sourceVisible2: true,
    ccVisible: true,
    selectedCategoriesIDes: ''
}



export const filterVisibilityChanger = (state = initialFilterState, action) => {
    switch (action.type) {

        case HIDE_FILTER_SOURCE:
            return { ...state, sourceVisible: action.payload };
        case SHOW_FILTER_SOURCE:
            return { ...state, sourceVisible: action.payload };
        case HIDE_FILTER_CC:
            return { ...state, ccVisible: action.payload };
        case SHOW_FILTER_CC:
            return { ...state, ccVisible: action.payload };
        case SET_SELECTED_CATEGORIES_IDES:
            return {...state, selectedCategoriesIDes: action.payload}
        case "test": 
            return {...state, sourceVisible2: action.payload} 
        default:
            return state
    }
}
