import React from "react";
import { useAccount } from '../hooks';


const AccountInfo = () => {
  const account = useAccount();

  if (!account) {
    return <h1>Loading...</h1>
  } else {
    return (
      <div>
        <p style={{ fontSize: "1rem" }}>name: {account.name}</p>
        <p style={{ fontSize: "1rem" }}>email: {account.email}</p>
        <p style={{ fontSize: "1rem" }}>type: {account.type}</p>
      </div>
    );
  }
};

export default AccountInfo;
