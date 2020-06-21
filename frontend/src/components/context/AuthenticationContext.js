import React, { useState, useEffect } from "react";

const AuthenticationContext = React.createContext();

const AuthenticationProvider = ({ children }) => {
  const [jwt, setJwt] = useState(null);

  useEffect(() => {
    setJwt(localStorage.getItem("accessToken"));
  }, []);

  const setNewJwt = (jwt) => {
    if (jwt === null) {
      localStorage.removeItem("accessToken");
    } else {
      localStorage.setItem("accessToken", jwt);
    }
    setJwt(jwt);
  };

  return (
    <AuthenticationContext.Provider value={{ setJwt: setNewJwt, jwt }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export { AuthenticationContext, AuthenticationProvider };
