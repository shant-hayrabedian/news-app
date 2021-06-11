import {endpoints} from './endpoints'
import customAxios from './axiosconfig'


export function fetchSearchBySelectedQueryParams(eventTargetValueForSearch, pageSize, page, sortBy) {
    return customAxios({
        method: 'GET',
        url: endpoints.urlArticles2,
        params: {
            q: eventTargetValueForSearch,        
            sortBy: sortBy,
            pageSize: pageSize,
            page: page,
        }
    })
        .then(response => response.data)
        .catch((error) => console.log(error))
}