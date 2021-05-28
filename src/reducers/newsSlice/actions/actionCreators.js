// import {fetchNews} from "../newsAPI"
import axios from 'axios'

const API_KEY = 'f22aaf5169914fae865735dc09fbfa26'
const url = `https://newsapi.org/v2/everything?q=Apple&from=2021-05-28&sortBy=popularity&apiKey=${API_KEY}`




const stateUpdate = (newState) => {
        return {
            type: "FETCH_NEWS",
            payload: newState
        }
}

 
export function loadFetchedNews() {
    return (dispatch, getState) => {
        return axios.get(url).then(response => response.data.articles).then((loadedNews) => { 
            dispatch(stateUpdate(loadedNews))
        })
    }
}
