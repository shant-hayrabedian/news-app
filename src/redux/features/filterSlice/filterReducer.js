import {
    SHOW_FILTER_CC,
    HIDE_FILTER_CC,
    CATEGORY_CHECKED_UNCHECKED,
    COUNTRY_CHECKED_UNCHECKED,
    FETCH_DATA_USING_CHECKBOXES_AND_FILTER,
    TO_EMPTY_THE_ARTICLESFROMFILTER,
    SET_CATEGORY_ID_STATE,
    SET_COUNTRY_ID_STATE,
    SET_SOURCE_ID_STATE
} from './constants'

export const initialFilterState = {
    ccVisible: true,
    checked: {
        categoryChecked: false,
        countryChecked: false,
        sourceChecked: false,
    },
    articlesFromFilter: [],
    checkBoxIdState: {
        categoryIdState: '',
        countryIdState: '',
        sourceIdState: ''
    }
}



export const filterVisibilityChanger = (state = initialFilterState, action) => {

    switch (action.type) {

        case FETCH_DATA_USING_CHECKBOXES_AND_FILTER:
            return { ...state, articlesFromFilter: [...state.articlesFromFilter, ...action.payload] }
        case TO_EMPTY_THE_ARTICLESFROMFILTER:
            return { ...state, articlesFromFilter: action.payload }

        case SET_CATEGORY_ID_STATE:
            return { ...state, checkBoxIdState: { ...state.checkBoxIdState, categoryIdState: action.payload } }
        case SET_COUNTRY_ID_STATE:
            return { ...state, checkBoxIdState: { ...state.checkBoxIdState, countryIdState: action.payload } }
        case SET_SOURCE_ID_STATE:
            return { ...state, checkBoxIdState: { ...state.checkBoxIdState, sourceIdState: action.payload } }

        case HIDE_FILTER_CC:
            return { ...state, ccVisible: action.payload, checked: { ...state.checked } }; //!!
        case SHOW_FILTER_CC:
            return { ...state, ccVisible: action.payload, checked: { ...state.checked } }; //!!
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
