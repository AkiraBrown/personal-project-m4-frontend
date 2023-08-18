import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Overlay from "../common/Overlay/Overlay";
import { getById, deleteCarByID } from "../common/API/API";

//Image import

import torque from "../../Images/torque-wrench.png";
import engine from "../../Images/car-engine.png";
import speed from "../../Images/racing.png";

function ShowPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchItem();
  }, []);

  async function fetchItem() {
    try {
      setIsLoading(true);
      let result = await getById(id);
      console.log(result.data);
      setData(result.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete() {
    try {
      let result = await deleteCarByID(id);
      console.log(result);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Overlay isLoading={isLoading}>
      <br />
      <div className="container bg-secondary rounded-3">
        <br />
        <h2>{`${data.car_make} ${data.car_model}`}</h2>
        <h3>{data.year}</h3>

        <div className="container align-center">
          <br />
          <img
            src={data.image_url}
            className="img-fluid rounded-3 mb-3"
            alt={data.car_model}
          />
          <hr />
          <div className="container">
            <p>{data.price}</p>
            <p>{data.body_type}</p>
          </div>
          <div className="btn-group">
            <button className="btn btn-primary" onClick={() => navigate(-1)}>
              Back
            </button>
            <button
              className="btn btn-primary"
              onClick={() => navigate(`/edit/${id}`)}
            >
              Edit
            </button>
            <button className="btn btn-primary">Delete</button>
          </div>
        </div>
      </div>
    </Overlay>
  );
}

export default ShowPage;
