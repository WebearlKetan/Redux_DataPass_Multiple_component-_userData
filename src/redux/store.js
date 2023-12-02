import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Initial state
const initialState = {
  userList: [],
};

// Reducer
const reducer = (state = initialState, action) => {
  
  switch (action.type) {
     // Handle the action to set the user list
    case 'SET_USER_LIST':
      return { ...state, userList: action.payload };
    default:
      return state;
  }
};

// Create store
// Create the Redux store with the reducer and thunk middleware
const store = createStore(reducer, applyMiddleware(thunk));

export default store;


