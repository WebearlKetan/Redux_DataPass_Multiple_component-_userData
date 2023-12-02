// src/components/Component4.js
import React from 'react';
import { useSelector } from 'react-redux';

const Component4 = () => {
  const userList = useSelector((state) => state.userList);

  return (
    <div>
      <h2>Component 4</h2>
      <ul>
      {userList.map(user => (
        <li key={user.id}>
          <p>{user.phone}</p>
          <p>{user.username}</p>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default Component4;
