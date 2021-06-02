import {combineReducers} from "redux"
import {fetchNews} from './sourcesSlice/sourcesReducer'
import {getArticlesForSingleSource} from './singleSourceSlice/singleSourceReducer'
import {getEventsOfSearchField} from "./headerSearchSlice/headerSearchReducer";




const rootReducer = combineReducers({
    FetchSources: fetchNews,
    FetchArticlesBySource: getArticlesForSingleSource,
    FetchSearchFields: getEventsOfSearchField
})


export default rootReducer