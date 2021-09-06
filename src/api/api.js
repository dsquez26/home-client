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
          {users.map(user => (
            <li>{user.name}</li>
          ))}
        </ul>
      );
    };
    

export default Apifetch;