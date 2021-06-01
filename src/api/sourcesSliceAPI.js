import axios from 'axios'
import {endpoints} from './endpoints'


//Sources Slice
export function fetchSources() {
    return axios.get(endpoints.urlSources).then(response => response.data.sources)
        .catch((error) => console.log(error))
}
