import environment from '../environment.js'

export const endpoints = {
    urlSources: `/sources`,
    urlArticles2: '/everything',
    urlArticles: (source, pageSize, pageNumber, sortType) => `/everything?sources=${source}&sortBy=${sortType}&pageSize=${pageSize}&page=${pageNumber}`,
    urlSearchByQuery: (eventTargetValue, pageSize, pageNumber, sortType) => `/everything?q=${eventTargetValue}&sortBy=${sortType}&pageSize=${pageSize}&page=${pageNumber}`
}