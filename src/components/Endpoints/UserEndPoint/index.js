import React, { useState, useEffect } from 'react';

// Styles
import { MyBody, MyButton, UserTable } from './UserEndPoint.styles';

const UserEndPoint = () => {
  const [users, setUsers] = useState([{}]);
  const [color, setColor] = useState(`rgb(127,2,241)`);

  const getColor = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  const fetchUsers = async (URL) => {
    const response = await fetch(URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const myUsers = await response.json();

    setUsers(
      myUsers.map((user) => {
        return user;
      })
    );
  };
  useEffect(() => {
    fetchUsers('https://jsonplaceholder.typicode.com/users');
  }, []);

  return (
    <MyBody>
      <UserTable color={color}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={+user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </UserTable>
      <MyButton onClick={getColor} color={color}>
        🎆 Click Me 🧨
      </MyButton>
    </MyBody>
  );
};

export default UserEndPoint;
