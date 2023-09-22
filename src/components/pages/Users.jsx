/* eslint jsx-a11y/anchor-is-valid:0 */
import React, { useEffect, useState } from "react";

import Default from "../templates/Default";
import UserListWrapper from "../molecules/UserListWrapper";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://63cf09718a780ae6e6710dbe.mockapi.io/users")
    .then((response) => response.json())
    .then((data) => {
      setUsers(data)
    })
  }, [])

  console.log("users", users)


  return (
    <Default>
      <div className="users">
        <h1>Users</h1>
        <UserListWrapper users={users} />
      </div>
    </Default>
  );
}