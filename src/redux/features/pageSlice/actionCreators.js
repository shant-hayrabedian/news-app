import {LOAD_MORE} from './constants'


const  updateState = (num) => {
    return {
        type: LOAD_MORE,
        payload: num 
     }
}

export function updatePageSize(num) {
    return (dispatch) => {
        return dispatch(updateState(num))
    }
}