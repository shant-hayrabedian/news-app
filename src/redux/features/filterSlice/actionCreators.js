import { fetchDataUsingCheckboxesFromFilter } from '../../../api/filterSliceAPI'
import {
    SHOW_FILTER_CC,
    HIDE_FILTER_CC,
    COUNTRY_CHECKED_UNCHECKED, 
    CATEGORY_CHECKED_UNCHECKED, 
    FETCH_DATA_USING_CHECKBOXES_AND_FILTER
} from './constants'




///!!! reverse

const updateOrderToNewestFilter= (arr) => {
    return {
        type: 'TO_NEWEST_FILTERARTICLES',
        payload: arr || []
    }
}

export const sortingFilteredArticlesFromNewest = (arr) => {
    return dispatch => {
        return dispatch(updateOrderToNewestFilter(arr))
    }
}


//!!!! chi ashxatum es meki hamar
const updateOrderToOldestFilter= (arr) => {
    return  {
        type: 'TO_OLDEST_FILTERARTICLES',
        payload: arr ,
    }
}
// .sort((a,b)=>{
//     if(Date.parse(a.publishedAt)/1000 < Date.parse(b.publishedAt)/1000){
//         return 1
//     }else{
//         return -1
//     }
// })

export const sortingFilteredArticlesFromOldest = (arr) => {
    return dispatch =>  {
        return dispatch(updateOrderToOldestFilter(arr))
    }
}


//!!!
    const emptyTheArray =() => {
        return {
            type: "TO_EMPTY_THE_ARTICLESFROMFILTER",
            payload: []
        }
    }
    export function toEmptyTheArrayFromFilter() {
        return dispatch => dispatch(emptyTheArray())
    }

//!!!!
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


///!!  ADD SOURCE CHECKED

//!!!  CountryCATEGORY hide show
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



