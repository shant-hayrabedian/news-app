import {endpoints} from './endpoints'
import customAxios from './axiosconfig'


export function fetchDataUsingCheckboxesFromFilter(source, qFromCheckbox,country,category, pageSize, page) {
    return customAxios({
        method: 'GET',
        url: endpoints.urlToGetArticlesFromFilter,
        params: {
            sources: source,
            q: qFromCheckbox,        
            country: country,
            category: category,
            pageSize: pageSize,
            page: page,
        }
    })
        .then(response => response.data)
        .catch((error) => console.log(error))

}