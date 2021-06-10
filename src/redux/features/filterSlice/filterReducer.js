import {
    SHOW_FILTER_CC,
    HIDE_FILTER_CC,
    CATEGORY_CHECKED_UNCHECKED,
    COUNTRY_CHECKED_UNCHECKED,
    FETCH_DATA_USING_CHECKBOXES_AND_FILTER
} from './constants'

export const initialFilterState = {
    ccVisible: true,
    checked: {
        categoryChecked: false,
        countryChecked: false,
        sourceChecked: false,
    },
    articlesFromFilter: [],
    queries: {
        sourceQuery: '',
        countryCode: '',
        category: '',
    }

}



export const filterVisibilityChanger = (state = initialFilterState, action) => {

    switch (action.type) {
        case FETCH_DATA_USING_CHECKBOXES_AND_FILTER:
            return { ...state, articlesFromFilter: [...action.payload, ...state.articlesFromFilter] }
        case "SET_SOURCEQUERY":
            return {...state, queries: {...state.queries, sourceQuery: action.payload}}
        case "SET_COUNTRYCODE":
            return {...state, queries: {...state.queries, countryCode: action.payload}}
        case "SET_CATEGORY":
            return {...state, queries: {...state.queries, category: action.payload}}
        case HIDE_FILTER_CC:
            return { ...state, ccVisible: action.payload, checked: {...state.checked, sourceChecked: action.payload2} }; //!!
        case SHOW_FILTER_CC:
            return { ...state, ccVisible: action.payload, checked: {...state.checked, sourceChecked: action.payload2} }; //!!
        case CATEGORY_CHECKED_UNCHECKED:
            return {
                ...state, checked: {
                    ...state.checked,
                    categoryChecked: action.payload,
                }
            }
        case COUNTRY_CHECKED_UNCHECKED:
            return {
                ...state, checked: {
                    ...state.checked,
                    countryChecked: action.payload
                }
            }
        default:
            return state
    }
}
