import {endpoints} from './endpoints'



export function fetchArticlesBySelectedSource(endpointOrID) {
    return axios.get(enpoints.urlArticles)
        .then(response => response.data)
        .catch((error) => console.log(error))
}
