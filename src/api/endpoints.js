import environment from '../environment.js'

export const endpoints = {
    urlSources: `/sources`,
    urlArticles: (source, pageSize, pageNumber) => `/everything?sources=${source}&pageSize=${pageSize}&page=${pageNumber}`,
    urlSearchByQuery: (eventTargetValue, pageSize, pageNumber) => `/everything?q=${eventTargetValue}&pageSize=${pageSize}&page=${pageNumber}`
}