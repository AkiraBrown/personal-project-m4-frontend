import React from "react";
import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <div className="card mb-3 bg-gradient bg-secondary" key={item.id}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={item.image_url}
            className="img-thumbnail img-fluid h-100 w-100 rounded-start"
            alt={item.car_make}
          ></img>
        </div>
        <div className="col-md-8">
          <div className="card-body ">
            <h5 className="card-title">{`${item.car_make} ${item.car_model}`}</h5>
            <p className="card-text">________________________</p>
            <p className="card-text">Price: ${item.price}</p>
            <p className="card-text">Year: {item.year}</p>
            <p className="card-text">Engine Size: {item.engine_size}L</p>
            <p className="card-text">Body: {item.body_type}</p>
            <Link className="btn btn-primary stretched-link" to={`/${item.id}`}>
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
