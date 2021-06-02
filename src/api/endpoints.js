import environment from '../environment.js'

export const endpoints = {
    urlSources: `/sources`,
    urlArticles: (endpointOrID) => `/everything?sources=${endpointOrID}`,
    urlSearchByQuery: (eventTargetValue) => `/everything?q=${eventTargetValue}`
}