import environment from '../environment.js'

export const endpoints = {
    urlSources: `/sources`,
    urlArticles: (endpointOrID) => `/everything?sources=${endpointOrID}`,
    urlSearch: `/q`,
    urlSearchParams: (endpointOrID) => `/everything?q=${endpointOrID}`,
}

