import {endpoints} from './endpoints'
import customAxios from './axiosconfig'


export function fetchSearchBySelectedQueryParams(eventTargetValue, pageSize, pageNumber) {
    return customAxios.get(endpoints.urlSearchByQuery(eventTargetValue, pageSize, pageNumber))
        .then(response => response.data)
        .catch((error) => console.log(error))
} 