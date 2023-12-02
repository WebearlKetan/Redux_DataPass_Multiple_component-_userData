// src/redux/asyncActions.js
import { setUserList } from './actions';

// Define an asynchronous action to fetch user data
export const fetchUserData = () => {
  return async (dispatch) => {
    try {
      // Fetch data from a dummy API
      const response = await fetch('https://dummyjson.com/users');
      const data = await response.json();
       // Dispatch the setUserList action with the fetched data
      dispatch(setUserList(data.users));
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
};


