import axios from 'axios'
import environment from '../environment'

const customAxios =  axios.create({
    baseURL: 'https://newsapi.org/v2/',
    params:{
        source: "sources",
    },
    // headers: {
    //     Authorization: `Bearer ${environment.NEWS_API_KEY}`
    // }
})
// customAxios.defaults.header.common = {Authorization: `Bearer ${environment.NEWS_API_KEY}`}

export default customAxios

