// src/components/Component1.js
import React from 'react';
import { useSelector } from 'react-redux';

const Component1 = () => {
  const userList = useSelector((state) => state.userList);

  return (
    <div>
      <h2>Component 1</h2>
    <ul>
      {userList.map(user => (
        <li key={user.id}>
          <p>{user.firstName}</p>
          <p>{user.lastName}</p>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default Component1;
