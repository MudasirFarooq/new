import { createStore } from 'redux'
import { reducers } from './reducers/index'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'

export const store = createStore(
    reducers,
    applyMiddleware(thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    
    // {},
