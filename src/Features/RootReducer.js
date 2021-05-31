import {combineReducers} from "redux"
import {fetchNews} from './SourcesSlice/SourcesReducer'
import {getArticlesForSingleSource} from './SingleSourceSlice/SingleSourceReducer'




const RootReducer = combineReducers({
    FetchSources: fetchNews,
    FetchArticlesBySource: getArticlesForSingleSource
})


export default RootReducer