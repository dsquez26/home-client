import React, { useEffect, useState } from 'react';

const Apifetch = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    async function getUsers() {
        const response = await fetch('http://localhost:5000/api/v1/users');
        console.log('respose', response)
        const users = await response.json();
        setUsers(users);
    }

    return (
        <ul>
          <h4>Current Registered Users</h4>
          {users.map(user => (
            <li key={user.name}>Name: {user.name}{" "}{user.email}{" "}{user.phone}</li>
          ))}
        </ul>
      );
    };
    

export default Apifetch;