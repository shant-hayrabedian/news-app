import {endpoints} from './endpoints'
import customAxios from './axiosconfig'


export function fetchArticlesBySelectedSource(source, pageSize, pageNumber) {
    return customAxios.get(endpoints.urlArticles(source, pageSize, pageNumber))
        .then(response => response.data)
        .catch((error) => console.log(error))
}
