// src/App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from './redux/asyncActions';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import Component4 from './components/Component4';
import Component5 from './components/Component5';

const App = () => {
    // Retrieve dispatch function and userList from Redux store
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);


  // Fetch product data from an API using useEffect hook
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  // Render the main structure of the application with child components

  return (
    <div>
      <div>
        <h1>Component</h1>
         {/* Pass userList as a prop to each child component */}
        <Component1 userList={userList} />
        <Component2 userList={userList} />
        <Component3 userList={userList} />
        <Component4 userList={userList} />
        <Component5 userList={userList} />
      </div>
    </div>
  );
};

export default App;
