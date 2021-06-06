import {endpoints} from './endpoints'
import customAxios from './axiosconfig'


// export function fetchArticlesBySelectedSource(source, pageSize, pageNumber, sortType) {
//     return customAxios.get(endpoints.urlArticles(source, pageSize, pageNumber, sortType))
//         .then(response => response.data)
//         .catch((error) => console.log(error))
// }

/// karam unenam mi function bolor zaprosneri hamar, karam amen meki hamar arandizn zarqem, endpoint@ mihat a 
export function fetchArticlesBySelectedSource(sources, pageSize, page, sortBy) {
    return customAxios({
        method: 'GET',
        url: endpoints.urlArticles2,
        params: {
            sources: sources,
            sortBy: sortBy,
            pageSize: pageSize,
            page: page,
        }
    })
        .then(response => response.data)
        .catch((error) => console.log(error))
}