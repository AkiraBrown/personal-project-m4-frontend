import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getById, updateCar } from "../common/API/API";

function EditPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  //const [isLoading, setIsLoading] = useState(false);

  const [carData, setCarData] = useState({
    car_make: "",
    car_model: "",
    year: 1999,
    body_type: "",
    color_options: "",
    fuel_type: "",
    engine_size: "0.0",
    horsepower: 0,
    torque: 519,
    transmission_type: "",
    acceleration: "0.0",
    top_speed: 0,
    mileage: 0,
    safety_features: "",
    entertainment_features: "",
    interior_features: "",
    exterior_features: "",
    price: 0,
    customer_ratings: "0.0",
    sales_figures: 0,
    image_url: "",
  });

  useEffect(() => {
    const fetchItem = async () => {
      try {
        //setIsLoading(true);
        let result = await getById(id);
        console.log(result.data);
        setCarData(result.data);
        //setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchItem();
  }, []);

  //This function should update majority of the text fields because they are strings
  function handlePrimaryChange(id, value) {
    console.log(id, value, typeof value);
    setCarData({
      ...carData,
      [id]: value,
    });
  }

  //This is a unique function that handles input fields that need formatting
  /*This function is no longer needed because it was meant to be used to deal with 
  acceleration, customer_ratings and engine size. Because those data entries have a mix of decimals
  and strings i found that using the Parseint and parse float method automatically identifies 
  where a floating point exists in a string and where an integer is. This way i don't need to make a 
  function to format data before sending it to the backend */
  //function handleSecondaryChange(id, value) {}

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await updateCar(id, carData);
      alert("Successfully Updated!");
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <br />
      <div className="container-md border rounded shadow">
        <br />
        <h1>Edit Car</h1>
        <br />
        <h4>This is a long form, get some snacks🍏</h4>
        <br />
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <label className="input-group-text">Car Make</label>
            <input
              type="text"
              id="car_make"
              className="form-control"
              required
              value={carData.car_make}
              onChange={(e) => handlePrimaryChange(e.target.id, e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text">Car Model</label>
            <input
              type="text"
              id="car_model"
              className="form-control"
              required
              value={carData.car_model}
              onChange={(e) => handlePrimaryChange(e.target.id, e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text">Year</label>
            <input
              type="number"
              id="year"
              className="form-control"
              min={1886}
              required
              value={carData.year}
              onChange={(e) => handlePrimaryChange(e.target.id, e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text">Body Type</label>
            <input
              type="text"
              id="body_type"
              className="form-control"
              required
              value={carData.body_type}
              onChange={(e) => handlePrimaryChange(e.target.id, e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text">Color Options</label>
            <input
              type="text"
              id="color_options"
              className="form-control"
              required
              value={carData.color_options}
              onChange={(e) => handlePrimaryChange(e.target.id, e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text">Fuel Type</label>
            <select
              className="form-select"
              id="fuel_type"
              onChange={(e) => handlePrimaryChange(e.target.id, e.target.value)}
            >
              <option defaultValue={carData.fuel_type}>
                {carData.fuel_type}
              </option>
              <option>Electric</option>
              <option>Hybrid</option>
              <option>Gasoline</option>
              <option>Diesel</option>
            </select>
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text">Engine Size (Litres)</label>
            <input
              type="number"
              id="engine_size"
              min={0}
              step="any"
              className="form-control"
              required
              value={carData.engine_size}
              onChange={(e) =>
                handlePrimaryChange(e.target.id, `${e.target.value}`)
              }
            />
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text">Horsepower</label>
            <input
              type="number"
              id="horsepower"
              className="form-control"
              min={0}
              step="any"
              required
              value={carData.horsepower}
              onChange={(e) => handlePrimaryChange(e.target.id, e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text">Torque (Nm)</label>
            <input
              type="number"
              id="torque"
              className="form-control"
              min={0}
              step="any"
              required
              value={carData.torque}
              onChange={(e) => handlePrimaryChange(e.target.id, e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text">Transmission Type</label>
            <select
              className="form-select"
              id="transmission_type"
              onChange={(e) => handlePrimaryChange(e.target.id, e.target.value)}
            >
              <option defaultValue={carData.transmission_type}>
                {carData.transmission_type}
              </option>
              <option>Manual</option>
              <option>Automatic</option>
            </select>
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text">Acceleration (seconds)</label>
            <input
              type="number"
              id="acceleration"
              min={0}
              step="any"
              className="form-control"
              value={parseFloat(carData.acceleration)}
              onChange={(e) => handlePrimaryChange(e.target.id, e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text">Mileage</label>
            <input
              className="form-control"
              id="mileage"
              min={0}
              step="any"
              type="number"
              value={carData.mileage}
              onChange={(e) => handlePrimaryChange(e.target.id, e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text">Safety Features</label>
            <input
              className="form-control"
              id="safety_features"
              type="text"
              required
              value={carData.safety_features}
              onChange={(e) => handlePrimaryChange(e.target.id, e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text">Entertainment Features</label>
            <input
              className="form-control"
              id="entertainment_features"
              type="text"
              value={carData.entertainment_features}
              onChange={(e) => handlePrimaryChange(e.target.id, e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text">Interior Features</label>
            <input
              className="form-control"
              id="interior_features"
              type="text"
              value={carData.interior_features}
              onChange={(e) => handlePrimaryChange(e.target.id, e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text">Exterior Features</label>
            <input
              className="form-control"
              id="exterior_features"
              type="text"
              value={carData.exterior_features}
              onChange={(e) => handlePrimaryChange(e.target.id, e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text">Price $</label>
            <input
              className="form-control"
              min={0}
              step="any"
              id="price"
              type="text"
              value={carData.price}
              onChange={(e) => handlePrimaryChange(e.target.id, e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text">
              Customer Ratings (Out of 5)
            </label>
            <input
              className="form-control"
              id="customer_ratings"
              type="number"
              min={0}
              step="any"
              value={carData.customer_ratings}
              onChange={(e) => handlePrimaryChange(e.target.id, e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text">Sales Figures (Units)</label>
            <input
              className="form-control"
              id="sales_figures"
              type="number"
              min={0}
              value={carData.sales_figures}
              onChange={(e) => handlePrimaryChange(e.target.id, e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text">Image URL</label>
            <input
              className="form-control"
              type="url"
              id="image_url"
              required
              value={carData.image_url}
              onChange={(e) => handlePrimaryChange(e.target.id, e.target.value)}
            />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  );
}

export default EditPage;
