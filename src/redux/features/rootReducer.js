import {combineReducers} from "redux"
import {fetchNews} from './sourcesSlice/sourcesReducer'
import {getArticlesForSingleSource} from './singleSourceSlice/singleSourceReducer'
import {getArticlesfromSearching} from "./headerSearchSlice/headerSearchReducer";
import {loadMoreArticles} from "./pageSlice/pageReducer"

// import {clickingReducer} from "./singleSourceSlice/singleSourceReducer"



const rootReducer = combineReducers({
    FetchedSources: fetchNews,
    FetchedArticlesBySource: getArticlesForSingleSource,
    FetchedArticlesFromSearch: getArticlesfromSearching,
    Page: loadMoreArticles
    // Clicked: clickingReducer
})


export default rootReducer