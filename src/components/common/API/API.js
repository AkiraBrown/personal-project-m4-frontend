import { Await } from "react-router-dom";
import Axios from "./Axios";

async function getAllCars() {
  try {
    let result = await Axios.get("/cars");
    return result;
  } catch (error) {
    return error;
  }
}

async function getById(id) {
  try {
    let result = await Axios.get(`/cars/${id}`);
    return result;
  } catch (error) {
    return error;
  }
}
async function getCarMake(term) {
  try {
    let result = await Axios.get(`/cars/get-car-make/${term}`);
    return result;
  } catch (error) {
    return error;
  }
}

async function deleteCarByID(id) {
  try {
    let result = await Axios.delete(`/cars/${id}`);
    return result;
  } catch (error) {
    return error;
  }
}

async function createCar(data) {
  try {
    let result = await Axios.post(`/cars`, data);
    return result;
  } catch (error) {
    return error;
  }
}
async function updateCar(id, data) {
  try {
    let result = await Axios.put(`/cars/${id}`, data);
    return result;
  } catch (error) {
    return error;
  }
}

async function carBodyType(term) {
  try {
    let result = await Axios.get(`/cars/get-body-type/${term}`);
    return result;
  } catch (error) {
    return error;
  }
}

export {
  getAllCars,
  getById,
  getCarMake,
  deleteCarByID,
  createCar,
  updateCar,
  carBodyType,
};
