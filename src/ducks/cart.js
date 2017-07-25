const initialState = {
   name: "",
   cart: [],
   character: null,
   fetching: false,
   error: null,
}

const ADD_NAME = 'cart/ADD_NAME'
const ADD_ITEM = 'cart/ADD_ITEM'
const FETCH_CHARACTER = 'cart/FETCH_CHARACTER'
const FETCH_CHARACTER_PENDING = 'cart/FETCH_CHARACTER_PENDING'
const FETCH_CHARACTER_REJECTED = 'cart/FETCH_CHARACTER_REJECTED'
const FETCH_CHARACTER_FULFILLED = 'cart/FETCH_CHARACTER_FULFILLED'

export function fetchCharacter(promise) {
   return {
      type: FETCH_CHARACTER,
      payload: promise
   }
}

export function addName(name) {
   return {
      type: ADD_NAME,
      name: name
   }
}
export function addItem(item) {
   return {
      type: ADD_ITEM,
      item: item
   }
}

export default function cartReducer(state=initialState, action) {
   switch(action.type) {
      case ADD_NAME:
         return Object.assign({}, state, {name: action.name})
      case ADD_ITEM:
         return Object.assign({}, state, {cart: [...state.cart, action.item]})
      case FETCH_CHARACTER_PENDING:
         return Object.assign({}, state, {fetching: true})
      case FETCH_CHARACTER_REJECTED:
         return Object.assign({}, state, {fetching: false, error: action.payload})
      case FETCH_CHARACTER_FULFILLED:
         return Object.assign({}, state, {
            fetching: false,
            character: action.payload.data
         })
      default:
         return state
   }
}