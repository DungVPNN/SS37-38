import React, { useMemo } from 'react';

export default function Bai2() {
  const adultUsers = useMemo(() => {
    const userList = [
      { id: 1, name: 'Alice', age: 25 },
      { id: 2, name: 'Bob', age: 30 },
      { id: 3, name: 'Charlie', age: 20 },
    ];
    return userList.filter(user => user.age > 18);
  }, []);
  return (
    <div>
      <ul>
        {adultUsers.map(user => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
}