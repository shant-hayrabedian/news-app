import { fetchDataUsingCheckboxesFromFilter } from '../../../api/filterSliceAPI'
import {
    SHOW_FILTER_CC,
    HIDE_FILTER_CC,
    COUNTRY_CHECKED_UNCHECKED,
    CATEGORY_CHECKED_UNCHECKED,
    FETCH_DATA_USING_CHECKBOXES_AND_FILTER,
    SET_CATEGORY_ID_STATE,
    TO_EMPTY_THE_ARTICLESFROMFILTER,
    SET_SOURCE_ID_STATE,
    SET_COUNTRY_ID_STATE
} from './constants'

///!!! SEt_CATEGORY_COUNTRY_SOURCE_ID_STATE

const updateCategoryIdState = (val) => {
    return {
        type: SET_CATEGORY_ID_STATE,
        payload: val
    }
}

export const setCategoryIdState = (val) => {
    return dispatch => {
        return dispatch(updateCategoryIdState(val))
    }
}

const updateCountryIdState = (val) => {
    return {
        type: SET_COUNTRY_ID_STATE,
        payload: val
    }
}

export const setCountryIdState = (val) => {
    return dispatch => {
        return dispatch(updateCountryIdState(val))
    }
}
const updateSourceIdState = (val) => {
    return {
        type: SET_SOURCE_ID_STATE,
        payload: val
    }
}

export const setSourceIdState = (val) => {
    return dispatch => {
        return dispatch(updateSourceIdState(val))
    }
}

//!!! EMPTY ARR
const emptyTheArray = () => {
    return {
        type: TO_EMPTY_THE_ARTICLESFROMFILTER,
        payload: []
    }
}
export function toEmptyTheArrayFromFilter() {
    return dispatch => dispatch(emptyTheArray())
}

//!!!! LOAD MAIN DATA
const updateArticlesFromFilterState = (newState) => {
    return {
        type: FETCH_DATA_USING_CHECKBOXES_AND_FILTER,
        payload: newState || [],
    }
}

export function loadDatabyCheckboxes(source, qFromFilter, country, category, pageSize, page) {
    return (dispatch, getState) => {
        return fetchDataUsingCheckboxesFromFilter(source, qFromFilter, country, category, pageSize, page)
            .then((loadedNews) => {
                dispatch(updateArticlesFromFilterState(loadedNews?.articles))
            })
    }
}

//!!! CategoryCHecked

const changeCategoryCheckedUnChecked = (boolean) => {
    return {
        type: CATEGORY_CHECKED_UNCHECKED,
        payload: boolean
    }
}

export const categoryCheckedUnchecked = (boolean) => {
    return dispatch => {
        return dispatch(changeCategoryCheckedUnChecked(boolean))
    }
}
//!! countryChecked
const changeCountryCheckedUnChecked = (boolean) => {
    return {
        type: COUNTRY_CHECKED_UNCHECKED,
        payload: boolean
    }
}


export const countryCheckedUnchecked = (boolean) => {
    return dispatch => {
        return dispatch(changeCountryCheckedUnChecked(boolean))
    }
}

//!!!  COUNTRY_AND_CATEGORY hide show
const hideCCAction = () => {
    return {
        type: HIDE_FILTER_CC,
        payload: false,
        payload2: true
    }
}

const showCCAction = () => {
    return {
        type: SHOW_FILTER_CC,
        payload: true,
        payload2: false,
    }
}

export const hideCountryAndCategory = () => {
    return dispatch => {
        return dispatch(hideCCAction())
    }
}
export const showCountryAndCategory = () => {
    return dispatch => {
        return dispatch(showCCAction())
    }
}



