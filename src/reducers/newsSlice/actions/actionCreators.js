import axios from 'axios'

const API_KEY = 'f22aaf5169914fae865735dc09fbfa26'
const url = `https://newsapi.org/v2/sources?apiKey=${API_KEY}`


const stateUpdate = (newState) => {
    return {
        type: "FETCH_NEWS",
        payload: newState
    }
}
// get- i mej qcem url@  u amen angam search aneluc loadfetchedNews-i argumentnerov poxem link@
export function loadFetchedNews() {
    return (dispatch, getState) => {
        axios.get(url)
            .then(response => response.data.sources)
            .catch((error) => console.log(error)).then((loadedNews) => {
                dispatch(stateUpdate(loadedNews))
            })
    }
}
