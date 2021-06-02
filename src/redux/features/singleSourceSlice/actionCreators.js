import {FETCH_BY_SINGLE_SELECTED_SOURCE_ARTICLES} from './constants'
import {fetchArticlesBySelectedSource} from '../../../api/singleSourceSliceAPI'



//actions
const stateUpdate = (newState) => {
    return {
        type: FETCH_BY_SINGLE_SELECTED_SOURCE_ARTICLES,
        payload: newState,
    }
}

//action loader
export function loadArticlesBySelectedSource(endpointOrID) {
    return  async (dispatch, getState) => {
       return fetchArticlesBySelectedSource(endpointOrID).then((loadedNews) => {
                dispatch(stateUpdate(loadedNews))
            })
    }
}


// const  clickState = () => {
//     debugger;
//     return {
//         type: "CLICKED",
//         payload: true   
//      }
// }


// export function click() {
//     debugger;
//     return (dispatch) => {
//         debugger;
//         return new Promise((resolve) =>{
//             resolve(dispatch(clickState))
//         })  
//     }
// }

