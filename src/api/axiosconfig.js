import axios from 'axios'
import environment from '../environment'

const customAxios =  axios.create({
    baseURL: 'https://newsapi.org/v2/',
    params:{
        // sources:sources
        // query: 'q',
        // page: 'page',
        // pageSize: 'pageSize',
        // sort: 'sortBy'
    },
    headers: {
        Authorization: `${environment.NEWS_API_KEY}`
    }
})


export default customAxios

