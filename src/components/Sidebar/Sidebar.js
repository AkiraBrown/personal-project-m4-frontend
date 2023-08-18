import React, { useContext } from "react";
import { SidebarContext } from "../common/context/context";
import { getCarMake, getAllCars } from "../common/API/API";

function Sidebar() {
  const {
    carMake,
    // selectBody,
    carSelection,
    // carBody,
    // selectColor,
    // colorSelection,
    setCarArr,
    setIsLoading,
    setCarMake,
  } = useContext(SidebarContext);

  /*
    CarSelection is an Array state referring to the options available on car maker
    carBody is an array selection for body options
    */
  async function alterByCarMake(term) {
    setCarMake(term);
    try {
      setIsLoading(true);
      //console.log(term);
      let result;
      if (term === "") {
        result = await getAllCars();
      } else {
        result = await getCarMake(term);
      }
      //console.log(result.data);
      setCarArr(result.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  //function handleOnChange() {}

  return (
    <div className="container-md col-4">
      <br />
      <div className="container border rounded">
        <form className="form mb-3">
          <br />
          <label className="form-label">Car Make</label>
          <br />
          <select
            className="form-select"
            onChange={(e) => {
              alterByCarMake(e.target.value);
            }}
          >
            <option defaultValue={""}>{""}</option>
            {carSelection.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
          {/* <label className="form-label">Car Color</label>
          <select
            className="form-select"
            onChange={(e) => {
              console.log(e.target.value);
              //alterByCarMake(e.target.value);
            }}
          >
            <option defaultValue={""}>{""}</option>
            {colorSelection.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select> */}
        </form>
        <div className="container">
          <p>You can filter by Car manufacturer with the dropdown above</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
