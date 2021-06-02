import {endpoints} from './endpoints'
import customAxios from './axiosconfig'


export function fetchSearchBySelectedQueryParams(endpointOrID) {
    return customAxios.get(endpoints.urlSearchParams(endpointOrID))
        .then(response => response.data)
        .catch((error) => console.log(error))
}