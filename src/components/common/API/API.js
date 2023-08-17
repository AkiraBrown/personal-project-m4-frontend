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

export { getAllCars, getById };
