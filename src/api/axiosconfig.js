import axios from 'axios'
import environment from '../environment'

const customAxios =  axios.create({
    baseURL: 'https://newsapi.org/v2/',
    params:{
        source: "sources",
        q: "q",
    },
    headers: {
        Authorization: `${environment.NEWS_API_KEY}`
    }
})


export default customAxios

