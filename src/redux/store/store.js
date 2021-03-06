import thunk from "redux-thunk"
import { applyMiddleware, createStore } from "redux";
import rootReducer from "../features/rootReducer"
import { initialSourcesState } from '../features/sourcesSlice/sourcesReducer'
import { initialArticlesState } from '../features/singleSourceSlice/singleSourceReducer'
import { initialSearchState } from '../features/headerSearchSlice/headerSearchReducer'

import { initialPageSize } from '../features/pageSlice/pageReducer'
import { initialFilterState } from "../features/filterSlice/filterReducer";

const middleware = applyMiddleware(thunk);

const initialState = {
    FetchedSources: initialSourcesState,
    FetchedArticlesBySource: initialArticlesState,
    FetchedArticlesFromSearch: initialSearchState,
    Page: initialPageSize,
    Filter: initialFilterState
}


const store = createStore(rootReducer, initialState, middleware);

export default store