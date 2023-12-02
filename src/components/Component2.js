// src/components/Component2.js
import React from 'react';
import { useSelector } from 'react-redux';

const Component2 = () => {
  const userList = useSelector((state) => state.userList);

  return (
    <div>
      <h2>Component 2</h2>
      <ul>
      {userList.map(user => (
        <li key={user.id}>
          <p>{user.maidenName}</p>
          <p>{user.age}</p>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default Component2;
