import axios from 'axios'

const API_KEY = 'f22aaf5169914fae865735dc09fbfa26'
const url = `https://newsapi.org/v2/everything?q=Apple&from=2021-05-28&sortBy=popularity&apiKey=${API_KEY}`

export function fetchNews(){
    axios.get(url).then(response => response.data.articles)
    .catch((error)=> console.log(error))
}

