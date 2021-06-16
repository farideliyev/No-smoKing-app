import { createStore, combineReducers, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk';
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    auth: authReducer
})


export let store = createStore(reducers, applyMiddleware(thunk))