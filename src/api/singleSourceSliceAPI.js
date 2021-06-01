import {endpoints} from './endpoints'
import customAxios from './axiosconfig'


export function fetchArticlesBySelectedSource(endpointOrID) {
    return customAxios.get(endpoints.urlArticles(endpointOrID))
        .then(response => response.data)
        .catch((error) => console.log(error))
}
