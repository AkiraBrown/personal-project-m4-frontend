import React, { useState, useContext } from "react";
import { createCar } from "../common/API/API";
import { useNavigate } from "react-router-dom";

import { ToastContext } from "../common/context/context";
import Modal from "../common/Modal/Modal";
// color options ['White', 'Blue','Black', 'Red', 'Green', 'Yellow', 'Gray', 'Silver', 'Orange']
// array needs to be cleaned up

function NewCar() {
  const navigate = useNavigate();
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
  // const [colorOPTS] = useState([
  //   "White",
  //   "Blue",
  //   "Black",
  //   "Red",
  //   "Green",
  //   "Yellow",
  //   "Gray",
  //   "Silver",
  //   "Orange",
  // ]);
  const [bodyOPTS] = useState([
    "Sedan",
    "Truck",
    "SUV",
    "Coupe",
    "Wagon",
    "Convertible",
    "Minivan",
    "Hatchback",
  ]);
  const [toggle, setToggle] = useState(false);
  const { setToastArr } = useContext(ToastContext);

  function handleOnChange(id, value) {
    //console.log(id, value);
    setCarData({
      ...carData,
      [id]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await createCar(carData);
      setToastArr({
        Method: "CREATE",
        Status: "Success Entry Created",
        Name: carData.car_model,
      });

      setCarData({
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
      setToggle(true);

      // alert("Created Successfully!");
      // navigate(-1);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <br />
      <>
        {toggle ? (
          <>
            <Modal setToggle={setToggle} />
          </>
        ) : (
          <div className="container rounded shadow">
            <br />
            <h1>Create a new car</h1>
            <br />
            <div className="conatiner-md border rounded shadow">
              {/* <br /> */}
              <form className="container" onSubmit={handleSubmit}>
                <br />
                <div className="input-group mb-3">
                  <label className="input-group-text">Car Make</label>
                  <input
                    type="text"
                    id="car_make"
                    className="form-control"
                    required
                    value={carData.car_make}
                    onChange={(e) =>
                      handleOnChange(e.target.id, e.target.value)
                    }
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
                    onChange={(e) =>
                      handleOnChange(e.target.id, e.target.value)
                    }
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
                    onChange={(e) =>
                      handleOnChange(e.target.id, e.target.value)
                    }
                  />
                </div>
                <div className="input-group mb-3">
                  <label className="input-group-text">Body Type</label>
                  <select
                    className="form-select"
                    id="body_type"
                    required
                    onChange={(e) =>
                      handleOnChange(e.target.id, e.target.value)
                    }
                  >
                    <option></option>
                    {bodyOPTS.map((item, index) => {
                      return <option key={index}>{item}</option>;
                    })}
                  </select>
                </div>
                <div className="input-group mb-3">
                  <label className="input-group-text">Color Options</label>
                  <input
                    type="text"
                    id="color_options"
                    className="form-control"
                    required
                    value={carData.color_options}
                    onChange={(e) =>
                      handleOnChange(e.target.id, e.target.value)
                    }
                  />
                </div>
                <div className="input-group mb-3">
                  <label className="input-group-text">Fuel Type</label>
                  <select
                    className="form-select"
                    id="fuel_type"
                    onChange={(e) =>
                      handleOnChange(e.target.id, e.target.value)
                    }
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
                  <label className="input-group-text">
                    Engine Size (Litres)
                  </label>
                  <input
                    type="number"
                    id="engine_size"
                    min={0}
                    step="any"
                    className="form-control"
                    required
                    value={carData.engine_size}
                    onChange={(e) =>
                      handleOnChange(e.target.id, `${e.target.value}`)
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
                    onChange={(e) =>
                      handleOnChange(e.target.id, e.target.value)
                    }
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
                    onChange={(e) =>
                      handleOnChange(e.target.id, e.target.value)
                    }
                  />
                </div>
                <div className="input-group mb-3">
                  <label className="input-group-text">Transmission Type</label>
                  <select
                    className="form-select"
                    id="transmission_type"
                    onChange={(e) =>
                      handleOnChange(e.target.id, e.target.value)
                    }
                  >
                    <option defaultValue={carData.transmission_type}>
                      {carData.transmission_type}
                    </option>
                    <option>Manual</option>
                    <option>Automatic</option>
                  </select>
                </div>
                <div className="input-group mb-3">
                  <label className="input-group-text">
                    Acceleration (seconds)
                  </label>
                  <input
                    type="number"
                    id="acceleration"
                    min={0}
                    step="any"
                    className="form-control"
                    value={parseFloat(carData.acceleration)}
                    onChange={(e) =>
                      handleOnChange(e.target.id, e.target.value)
                    }
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
                    onChange={(e) =>
                      handleOnChange(e.target.id, e.target.value)
                    }
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
                    onChange={(e) =>
                      handleOnChange(e.target.id, e.target.value)
                    }
                  />
                </div>
                <div className="input-group mb-3">
                  <label className="input-group-text">
                    Entertainment Features
                  </label>
                  <input
                    className="form-control"
                    id="entertainment_features"
                    type="text"
                    value={carData.entertainment_features}
                    onChange={(e) =>
                      handleOnChange(e.target.id, e.target.value)
                    }
                  />
                </div>
                <div className="input-group mb-3">
                  <label className="input-group-text">Interior Features</label>
                  <input
                    className="form-control"
                    id="interior_features"
                    type="text"
                    value={carData.interior_features}
                    onChange={(e) =>
                      handleOnChange(e.target.id, e.target.value)
                    }
                  />
                </div>
                <div className="input-group mb-3">
                  <label className="input-group-text">Exterior Features</label>
                  <input
                    className="form-control"
                    id="exterior_features"
                    type="text"
                    value={carData.exterior_features}
                    onChange={(e) =>
                      handleOnChange(e.target.id, e.target.value)
                    }
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
                    onChange={(e) =>
                      handleOnChange(e.target.id, e.target.value)
                    }
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
                    onChange={(e) =>
                      handleOnChange(e.target.id, e.target.value)
                    }
                  />
                </div>
                <div className="input-group mb-3">
                  <label className="input-group-text">
                    Sales Figures (Units)
                  </label>
                  <input
                    className="form-control"
                    id="sales_figures"
                    type="number"
                    min={0}
                    value={carData.sales_figures}
                    onChange={(e) =>
                      handleOnChange(e.target.id, e.target.value)
                    }
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
                    onChange={(e) =>
                      handleOnChange(e.target.id, e.target.value)
                    }
                  />
                </div>
                <div className="btn-group">
                  <button className="btn btn-outline-primary" type="submit">
                    Submit
                  </button>
                  <button
                    className="btn btn-outline-primary"
                    type="button"
                    onClick={() => navigate(-1)}
                  >
                    Back
                  </button>
                </div>
                <br />
              </form>
              <br />
            </div>
          </div>
        )}
      </>
    </>
  );
}

export default NewCar;
