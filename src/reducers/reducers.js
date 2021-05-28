import {combineReducers} from "redux"
import fetchNews from './newsSlice/newsReducer'
import search from './search'



const reducers = combineReducers({
    FetchNews: fetchNews,
    Search: search
})

export default reducers