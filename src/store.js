import {createStore, combineReducers, applyMiddleware} from 'redux'

import promiseMiddleware from 'redux-promise-middleware'
// Import reducers
import user from './ducks/user'
import cart from './ducks/cart'

export default createStore(combineReducers({user, cart}), {}, applyMiddleware(promiseMiddleware()))