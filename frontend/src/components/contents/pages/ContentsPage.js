import React from "react";
import { Link } from "react-router-dom";
import { AccountInfo } from "../sources";

const ContentsPage = () => (
  <>
    <div className="card-group">
      <span className="card">
        <div className="card-body">
          <div className="card-title">Profile</div>
          <div className="card-text">
            <AccountInfo />
          </div>
          <Link to="/account">
            <span className="card-link">Edit</span>
          </Link>
        </div>
      </span>
      <span className="card">
        <div className="card-body">
          <div className="card-title">Animal Quiz</div>
          <div className="card-text">Random Quiz</div>
          <Link to="/quiz">
            <span className="card-link">Play</span>
          </Link>
        </div>
      </span>
    </div>
    <div className="card-group">
      <span className="card">
        <div className="card-body">
          <div className="card-title">Healing</div>
          <div className="card-text">Random Animal Picture</div>
          <Link to="/animal-picture-picker">
            <span className="card-link">See</span>
          </Link>
        </div>
      </span>
      <span className="card">
        <div className="card-body">
          <div className="card-title"> CARD</div>
          <div className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </div>
          <span className="card-link">link1</span>
          <span className="card-link">link2</span>
        </div>
      </span>
    </div>
  </>
);

export default ContentsPage;
