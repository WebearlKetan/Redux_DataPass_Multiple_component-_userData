// src/components/Component5.js
import React from 'react';
import { useSelector } from 'react-redux';

const Component5 = () => {
  const userList = useSelector((state) => state.userList);

  return (
    <div>
      <h2>Component 5</h2>
      <ul>
      {userList.map(user => (
        <li key={user.id}>
          <p>{user.password}</p>
          <p>{user.birthDate}</p>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default Component5;
