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
    articlesFromFilter: [],//source,
    //country uncheck country to mna// ete country click a exac exel, datarki nor category 
}



export const filterVisibilityChanger = (state = initialFilterState, action) => {

    switch (action.type) {

        case FETCH_DATA_USING_CHECKBOXES_AND_FILTER:
            return { ...state, articlesFromFilter: [...state.articlesFromFilter, ...action.payload] }
        case "TO_EMPTY_THE_ARTICLESFROMFILTER":
            return { ...state, articlesFromFilter: action.payload }
        case "TO_NEWEST_FILTERARTICLES":
            return { ...state, articlesFromFilter: [...state.articlesFromFilter, ...action.payload] }
        case 'TO_OLDEST_FILTERARTICLES':
            return { ...state, articlesFromFilter: [...state.articlesFromFilter, ...action.payload] }
        // case "FETCH_DATA_AND_PUT_IN_SOURCE":
        //     return {
        //         ...state, articlesFromFilter: {
        //             ...state.articlesFromFilter,
        //             source: [...state.articlesFromFilter.source, ...action.payload]

        //         }
        //     }
        // case "FETCH_DATA_AND_PUT_IN_COUNTRY":
        //     return {
        //         ...state, articlesFromFilter: {
        //             ...state.articlesFromFilter,
        //             country: [...state.articlesFromFilter.country, ...action.payload]
        //         }
        //     }
        // case "FETCH_DATA_AND_PUT_IN_CATEGORY":
        //     return {
        //         ...state, articlesFromFilter: {
        //             ...state.articlesFromFilter,
        //             category: [...state.articlesFromFilter.category, ...action.payload]
        //         }
        //     }
        case HIDE_FILTER_CC:
            return { ...state, ccVisible: action.payload, checked: { ...state.checked } }; //!!
        case SHOW_FILTER_CC:
            return { ...state, ccVisible: action.payload, checked: { ...state.checked} }; //!!
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
