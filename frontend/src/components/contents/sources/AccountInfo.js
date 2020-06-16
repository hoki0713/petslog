import React, { useState } from "react";

const AccountInfo = () => {
  const [account, setAccount] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "http://localhost:8080/accounts?email=abc@abc.com"
    );
    if (response.status === 200) {
      const json = await response.json();
      setAccount(json);
    } else {
      console.log("failed to fetch: " + response.status);
    }
  };
  fetchData();

  return (
    <div>
      <p style={{"fontSize" : "1rem"}}>name: {account.name}</p>
      <p style={{"fontSize" : "1rem"}}>email: {account.email}</p>
      <p style={{"fontSize" : "1rem"}}>type: {account.type}</p>
    </div>
  );
};

export default AccountInfo;
