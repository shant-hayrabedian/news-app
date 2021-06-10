import { fetchDataUsingCheckboxesFromFilter } from '../../../api/filterSliceAPI'
import {
    SHOW_FILTER_CC,
    HIDE_FILTER_CC,
    COUNTRY_CHECKED_UNCHECKED, 
    CATEGORY_CHECKED_UNCHECKED, 
    FETCH_DATA_USING_CHECKBOXES_AND_FILTER
} from './constants'


//!!! queries

const updateSourceQuery = (source) => {
    return {
        type: "SET_SOURCEQUERY",
        payload: source
    }
}

export  function setSourceQuery (source){
    return dispatch => {
        return dispatch(updateSourceQuery(source))
    }

}
const updateCountryCode = (country) => {
    return {
        type: "SET_COUNTRYCODE",
        payload: country
    }
}
export  function setCountryCode (country){
    return dispatch => {
        return dispatch(updateCountryCode(country))
    }

}

const updateCategory = (category) => {
    return {
        type: "SET_CATEGORY",
        payload: category
    }
}
export  function setCategory (category){
    return dispatch => {
        return dispatch(updateCategory(category))
    }

}


//!!!
const updateArticlesFromFilterState = (newState) => {
    return {
        type: FETCH_DATA_USING_CHECKBOXES_AND_FILTER,
        payload: newState || [],
    }
}

export function loadDatabyCheckboxes(source, qFromCheckbox,country,category, pageSize, page){
    return (dispatch,getState) => {
        return fetchDataUsingCheckboxesFromFilter(source, qFromCheckbox,country,category, pageSize, page)
                .then((loadedNews)=> {
                    dispatch(updateArticlesFromFilterState(loadedNews?.articles))
                })
    }
}

//!!!






// kareli a argumentnerov type-@ tal konkret componentic
//!!! CategoryCHecked

const changeCategoryCheckedUnChecked = (boolean) => {
    return {
        type:CATEGORY_CHECKED_UNCHECKED,
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
        type:COUNTRY_CHECKED_UNCHECKED,
        payload: boolean
    }
}


export const countryCheckedUnchecked = (boolean) => {
    return dispatch => {
        return dispatch(changeCountryCheckedUnChecked(boolean))
    }
}



//!!!  CcountryCATEGORY
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



