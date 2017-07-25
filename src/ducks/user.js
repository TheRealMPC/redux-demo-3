const initialState = {
   name: "",
   age: null,
   email: ""
}

const ADD_NAME = 'user/ADD_NAME'

export function addName(name) {
   return {
      type: ADD_NAME,
      name: name
   }
}

export default function userReducer(state=initialState, action) {
   switch(action.type) {
      case ADD_NAME:
         return Object.assign({}, state, {name: action.name})
      default:
         return state
   }
   
}