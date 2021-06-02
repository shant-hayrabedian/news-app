import {endpoints} from './endpoints'
import customAxios from './axiosconfig'


export function fetchSearchBySelectedQueryParams(eventTargetValue) {
    return customAxios.get(endpoints.urlSearchByQuery(eventTargetValue))
        .then(response => response.data)
        .catch((error) => console.log(error))
} 