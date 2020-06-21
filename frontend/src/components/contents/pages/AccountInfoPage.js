import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useAccount } from "../hooks";

const AccountInfoPage = () => {
  const account = useAccount();
  const [newName, setNewName] = useState("");

  useEffect(() => {
    if (account) {
      setNewName(account.name);
    }
  }, [account]);

  if (!account) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="form">
        <h3>Account Information</h3>

        <div className="table mx-auto" style={{ width: "40%", margin: "3rem" }}>
          <div>
            <td style={{ width: "30%", textAlign: "left" }}>Email</td>
            <td>{account.email}</td>
          </div>
          <div>
            <td style={{ width: "30%", textAlign: "left" }}>Password</td>
            <td>
              <Button variant="primary" type="submit">
                Change Password
              </Button>
            </td>
          </div>
          <div>
            <td style={{ width: "30%", textAlign: "left" }}>Name</td>
            <td>
              <input type="text" value={newName} onChange={(e) => {setNewName(e.target.value)}}/>
            </td>
          </div>
          <div>
            <td style={{ width: "30%", textAlign: "left" }}>Type</td>
            <td>
              <div style={{ textAlign: "left" }}>
                <input
                  type="radio"
                  id="type1"
                  name="type"
                  value="dog-person"
                  style={{ marginRight: "5px" }}
                />
                <label for="type1">dog-person</label>
              </div>
              <div style={{ textAlign: "left" }}>
                <input
                  type="radio"
                  id="type1"
                  name="type"
                  value="cat-person"
                  style={{ marginRight: "5px" }}
                />
                <label for="type1">cat-person</label>
              </div>
              <div style={{ textAlign: "left" }}>
                <input
                  type="radio"
                  id="type1"
                  name="type"
                  value="animal-person"
                  style={{ marginRight: "5px" }}
                />
                <label for="type1">animal-person</label>
              </div>
            </td>
          </div>
        </div>
        <Button variant="primary" type="submit" className="mr-3">
          Save
        </Button>
        <Button variant="danger" type="submit">
          Delete
        </Button>
      </div>
    );
  }
};

export default AccountInfoPage;
