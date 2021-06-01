import thunk from "redux-thunk"
import {applyMiddleware, createStore} from "redux";
import RootReducer from "../Features/RootReducer"
import {initialSourcesState} from '../Features/SourcesSlice/SourcesReducer'
import {initialArticlesState} from '../Features/SingleSourceSlice/SingleSourceReducer'
 
const middleware = applyMiddleware(thunk);

const initialState = {
    FetchSources: initialSourcesState,
    FetchArticlesBySource:initialArticlesState
}


const store = createStore(RootReducer, initialState, middleware);

export default store