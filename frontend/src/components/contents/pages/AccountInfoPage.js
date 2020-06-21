import React, { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import { useAccount } from "../hooks";
import { AuthenticationContext } from "../../context";

const AccountInfoPage = () => {
  const account = useAccount();
  const [newName, setNewName] = useState("");
  const [type, setType] = useState("");
  const { jwt } = useContext(AuthenticationContext);

  useEffect(() => {
    if (account) {
      setNewName(account.name);
    }
  }, [account]);

  async function handleSave(e) {
    e.preventDefault();
    const response = await fetch(`/accounts/${account.id}`, {
      method: "put",
      headers: { "Content-Type": "application/json", accessToken: jwt },
      body: JSON.stringify({
        name: newName,
        type: type,
      }),
    });
    if (response.status === 200) {
      alert("Success!");
    }
  }

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
              <input
                type="text"
                value={newName}
                onChange={(e) => {
                  setNewName(e.target.value);
                }}
              />
            </td>
          </div>
          <div>
            <td style={{ width: "30%", textAlign: "left" }}>Type</td>
            <td>
              <div style={{ textAlign: "left" }}>
                <input
                  onChange={(e) => setType(e.target.value)}
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
                  onChange={(e) => setType(e.target.value)}
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
                  onChange={(e) => setType(e.target.value)}
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
        <Button
          variant="primary"
          type="submit"
          className="mr-3"
          onClick={handleSave}
        >
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
