import thunk from "redux-thunk"
import {applyMiddleware, createStore} from "redux";
import rootReducer from "../features/rootReducer"
import {initialSourcesState} from '../features/sourcesSlice/sourcesReducer'
import {initialArticlesState} from '../features/singleSourceSlice/singleSourceReducer'
import {initialSearchState} from "../features/headerSearchSlice/headerSearchReducer";
 
const middleware = applyMiddleware(thunk);

const initialState = {
    FetchSources: initialSourcesState,
    FetchArticlesBySource:initialArticlesState,
    FetchSearchFields: initialSearchState
}


const store = createStore(rootReducer, initialState, middleware);

export default store