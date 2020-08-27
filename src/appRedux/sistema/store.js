import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

// import ventasReducer from './ventasDucks'
// import estadoRequestReducer from './EstadoRequest'

const rootReducer = combineReducers({
    // ventas  : ventasReducer,
    // estadoRequest : estadoRequestReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ) )
    return store
}