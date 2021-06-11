import customAxios from './axiosconfig'
import {endpoints} from './endpoints'


//Sources Slice
export function fetchSources() {
    return customAxios.get(endpoints.urlSources).then(response => response.data.sources)
        .catch((error) => console.log(error))
}
