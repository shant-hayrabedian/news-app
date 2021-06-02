import {combineReducers} from "redux"
import {fetchNews} from './sourcesSlice/sourcesReducer'
import {getArticlesForSingleSource} from './singleSourceSlice/singleSourceReducer'
import {getArticlesfromSearching} from "./headerSearchSlice/headerSearchReducer";


// import {clickingReducer} from "./singleSourceSlice/singleSourceReducer"



const rootReducer = combineReducers({
    FetchedSources: fetchNews,
    FetchedArticlesBySource: getArticlesForSingleSource,
    FetchedArticlesFromSearch: getArticlesfromSearching,

    // Clicked: clickingReducer
})


export default rootReducer