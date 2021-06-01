import environment from '../environment.js'



export const endpoints = {
    urlSources = `/sources?apiKey=${environment.NEWS_API_KEY}`,
    urlArticles = `/everything?sources=${endpointOrID}&apiKey=${environment.NEWS_API_KEY}`
}