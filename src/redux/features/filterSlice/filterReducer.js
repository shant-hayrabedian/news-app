import {
    SHOW_FILTER_CC,
    HIDE_FILTER_CC,
    CATEGORY_CHECKED_UNCHECKED,
    COUNTRY_CHECKED_UNCHECKED,
} from './constants'

export const initialFilterState = {
    ccVisible: true,
    checked: {
        categoryChecked: false,
        countryChecked: false,
    },

}



export const filterVisibilityChanger = (state = initialFilterState, action) => {

    switch (action.type) {

        case HIDE_FILTER_CC:
            return { ...state, ccVisible: action.payload };
        case SHOW_FILTER_CC:
            return { ...state, ccVisible: action.payload };
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
