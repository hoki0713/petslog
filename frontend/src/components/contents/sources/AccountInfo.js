import React, { useState, useEffect, useContext } from "react";
import { AuthenticationContext } from "../../context";

const AccountInfo = () => {
  const { jwt } = useContext(AuthenticationContext);
  const [account, setAccount] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/account/me", {
        headers: { accessToken: jwt },
      });
      if (response.status === 200) {
        const json = await response.json();
        setAccount(json);
      } else {
        console.log("failed to fetch: " + response.status);
      }
    };
    if (jwt) {
      fetchData();
    }
  }, [jwt]);

  return (
    <div>
      <p style={{ fontSize: "1rem" }}>name: {account.name}</p>
      <p style={{ fontSize: "1rem" }}>email: {account.email}</p>
      <p style={{ fontSize: "1rem" }}>type: {account.type}</p>
    </div>
  );
};

export default AccountInfo;
