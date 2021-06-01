import axios from 'axios'
// import customAxios from '../../api/axiosconfig'
const API_KEY = 'f22aaf5169914fae865735dc09fbfa26'


const urlSources = `https://newsapi.org/v2/sources?apiKey=${API_KEY}`

const customAxios =  axios.create({
    baseURL: 'https://newsapi.org/v2/',
    params:{
        source: "sources",
    },
    // headers: {
    //     Authorization: `Bearer ${environment.NEWS_API_KEY}`
    // }
})

//Sources Slice
export function fetchSources() {
    return axios.get(urlSources).then(response => response.data.sources)
        .catch((error) => console.log(error))
}


// SingleSourceSlice
export function fetchArticlesBySelectedSource(endpointOrID) {
    return customAxios.get(`/everything?sources=${endpointOrID}&apiKey=${API_KEY}`)
        .then(response => response.data)
        .catch((error) => console.log(error))
}

