import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Overlay from "../common/Overlay/Overlay";
import { getById, deleteCarByID } from "../common/API/API";

import { ToastContext } from "../common/context/context";

import Modal from "../common/Modal/Modal";

//Image import

// import torque from "../../Images/torque-wrench.png";
// import engine from "../../Images/car-engine.png";
// import speed from "../../Images/racing.png";

function ShowPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const [toggle, setToggle] = useState(false);
  const { setToastArr } = useContext(ToastContext);

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
    setToastArr({
      Method: "DELETE",
      Status: "Success Entry Deleted",
      Name: data.car_model,
    });
    try {
      await deleteCarByID(id);
      setToggle(true);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Overlay isLoading={isLoading}>
      <br />
      <>
        {toggle ? (
          <>
            <Modal setToggle={setToggle} />
          </>
        ) : (
          <div className="container bg-tertiary rounded-3 shadow">
            <div className="container ">
              <br />
              <div className="container">
                <h2>{`${data.car_make} ${data.car_model} (${data.year})`}</h2>
                <h3>{data.body_type}</h3>
              </div>
            </div>

            <div className="container align-center">
              <div className="container">
                <br />
                <img
                  src={data.image_url}
                  className="img-fluid rounded-3 mb-3"
                  alt={data.car_model}
                />
                <hr />
              </div>
              <div className="container">
                <div className="container">
                  <h3>${data.price}</h3>
                </div>
                <br />
                <div className="accordion align-center shadow">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-controls="panelStayOpen-collapseOne"
                      >
                        Car Specifications
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      className="accordion-collapse collapse show"
                    >
                      <div className="accordion-body">
                        <p>Engine Size (Litres): {data.engine_size}</p>
                        <p>Horsepower: {data.horsepower}</p>
                        <p>Torque(nm): {data.torque}</p>
                        <p>Transmission: {data.transmission_type}</p>
                        <p>Fuel Type: {data.fuel_type}</p>
                        <p>Acceleration(s): {data.acceleration}</p>
                        <p>Top Speed(mph): {data.top_speed}</p>
                        <p>Mileage: {data.mileage}</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        type="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo"
                      >
                        Internal Features
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwo"
                      className="accordion-collapse collapse"
                    >
                      <div className="accordion-body">
                        <p>Safety Features: {data.safety_features}</p>
                        <p>Interior Features: {data.interior_features}</p>
                        <p>
                          Entertainment Features: {data.entertainment_features}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        data-bs-target="#panelsStayOpen-collapseThree"
                        type="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree"
                      >
                        External Features
                      </button>
                    </h2>
                    <div
                      className="accordion-collapse collapse"
                      id="panelsStayOpen-collapseThree"
                    >
                      <div className="accordion-body">
                        <p>Color Options: {data.color_options}</p>
                        <p>Exterior Features: {data.exterior_features}</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        data-bs-target="#panelsStayOpen-collapseFour"
                        type="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseFour"
                      >
                        Other Information
                      </button>
                    </h2>
                    <div
                      className="accordion-collapse collapse"
                      id="panelsStayOpen-collapseFour"
                    >
                      <div className="accordion-body">
                        <p>Customer Ratings: {data.customer_ratings}/5</p>
                        <p>Sales Figures: {data.sales_figures}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="btn-group">
                <button
                  className="btn btn-primary"
                  onClick={() => navigate(-1)}
                >
                  Back
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => navigate(`/edit/${id}`)}
                >
                  Edit
                </button>
                <button className="btn btn-primary" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </div>
            <br />
          </div>
        )}
      </>
    </Overlay>
  );
}

export default ShowPage;
