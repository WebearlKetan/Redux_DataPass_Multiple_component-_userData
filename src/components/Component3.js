// src/components/Component3.js
import React from 'react';
import { useSelector } from 'react-redux';

const Component3 = () => {
  const userList = useSelector((state) => state.userList);

  return (
    <div>
      <h2>Component 3</h2>
      <ul>
      {userList.map(user => (
        <li key={user.id}>
          <p>{user.gender}</p>
          <p>{user.email}</p>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default Component3;
