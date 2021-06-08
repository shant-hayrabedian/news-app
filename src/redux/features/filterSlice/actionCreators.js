import {
    SHOW_FILTER_CC,
    HIDE_FILTER_CC,
    COUNTRY_CHECKED_UNCHECKED, 
    CATEGORY_CHECKED_UNCHECKED, 
} from './constants'


// kareli a argumentnerov type-@ tal konkret componentic
///!!! CategoryCHecked

const changeCategoryCheckedUnChecked = (boolean) => {
    return {
        type:COUNTRY_CHECKED_UNCHECKED,
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
        type:CATEGORY_CHECKED_UNCHECKED,
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
        payload: false
    }
}

const showCCAction = () => {
    return {
        type: SHOW_FILTER_CC,
        payload: true
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



