import React, { useEffect, useState } from 'react';

const Apifetch = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    async function getUsers() {
        const response = await fetch('http://localhost:3000/testAPI');
        // const response = await fetch('https://jsonplaceholder.typicode.com/users');
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