import {LOAD_MORE, RESET, CHANGE_ORDER} from './constants'


const  updateState = (num) => {
    return {
        type: LOAD_MORE,
        payload: num 
     }
}


const reset = (num) => {
    return {
        type: RESET,
        payload: num
    }
}

export function updatePageSize(num) {
    return (dispatch) => {
        return dispatch(updateState(num))
    }
}

export function resetPage(num){
    return dispatch =>{  
        return dispatch(reset(num))
    }
}



const ordering = (order)=>{
    return {
        type: CHANGE_ORDER,
        payload: order
    }
}

export const changeOrder =(order) => {
    return dispatch => {
        return dispatch(ordering(order))
    }
}