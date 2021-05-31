import axios from 'axios'

const API_KEY = 'f22aaf5169914fae865735dc09fbfa26'


const urlSources = `https://newsapi.org/v2/sources?apiKey=${API_KEY}`

const urlAllArticlesBySource = ""


//Sources Slice
export function fetchSources() {
    return axios.get(urlSources).then(response => response.data.sources)
        .catch((error) => console.log(error))
}


// SingleSourceSlice
export function fetchArticlesBySelectedSource(endpointOrID) {
    return axios.get(`https://newsapi.org/v2/everything?sources=${endpointOrID}&apiKey=${API_KEY}`)
        .then(response => response.data)
        .catch((error) => console.log(error))
}

