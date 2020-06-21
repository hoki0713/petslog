import { useEffect, useContext, useState } from "react";
import { AuthenticationContext } from "../../context";

const useAccount = () => {
  const { jwt } = useContext(AuthenticationContext);
  const [account, setAccount] = useState(null);

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

  return account;
};

export default useAccount;
