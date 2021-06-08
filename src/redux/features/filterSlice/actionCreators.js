import {
    SHOW_FILTER_CC,
    HIDE_FILTER_CC,
    HIDE_FILTER_SOURCE, 
    SHOW_FILTER_SOURCE, 
    SET_SELECTED_CATEGORIES_IDES
} from './constants'


// kareli a argumentnerov type-@ tal konkret componentic

const test1 = (bool) => {
    return { 
        type: 'test', 
        payload: bool
    }
}
export const testing = (bool) => {
    return dispatch => {
        return dispatch(test1(bool))
    }
}


//!!! Source
const hideSourceAction = () => {
    return {
        type: HIDE_FILTER_SOURCE,
        payload: false
    }
}

const showSourceAction = () => {
    return {
        type: SHOW_FILTER_SOURCE,
        payload: true
    }
}


export const hideSource = () => {
    return dispatch => {
        return dispatch(hideSourceAction())
    }
}
export const showSource = () => {
    return dispatch => {
        return dispatch(showSourceAction())
    }
}

//!!!  CC
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

export const hideCC = () => {
    return dispatch => {
        return dispatch(hideCCAction())
    }
}
export const showCC = () => {
    return dispatch => {
        return dispatch(showCCAction())
    }
}

//!!! CHECKBOX

const changeState = (value) =>{
    return {
        type: SET_SELECTED_CATEGORIES_IDES,
        payload: value
    }
}

export const setSelectedCategoriesIDes =(value) =>{
    return dispatch => {
        return dispatch(changeState(value))
    }
}


