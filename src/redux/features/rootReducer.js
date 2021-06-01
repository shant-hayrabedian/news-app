import {combineReducers} from "redux"
import {fetchNews} from './sourcesSlice/sourcesReducer'
import {getArticlesForSingleSource} from './singleSourceSlice/singleSourceReducer'




const rootReducer = combineReducers({
    FetchSources: fetchNews,
    FetchArticlesBySource: getArticlesForSingleSource
})


export default rootReducer