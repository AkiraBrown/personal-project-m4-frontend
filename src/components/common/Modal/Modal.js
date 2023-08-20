import React from "react";
import { useNavigate } from "react-router-dom";

function Modal({ setToggle }) {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div class="card">
        <div class="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Request Accepted</h5>
          <p className="card-text">Your request has gone through!</p>
          <button
            className="btn btn-primary"
            onClick={() => {
              setToggle(false);
              navigate(-1);
            }}
          >
            Go somewhere
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
