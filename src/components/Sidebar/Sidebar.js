import React, { useContext } from "react";
import { SidebarContext } from "../common/context/context";
import { getCarMake, getAllCars } from "../common/API/API";
import Toast from "../Toast/Toast";

function Sidebar() {
  const {
    //carMake,
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
      if (term === "All") {
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
    <div className="container-md col-4 ">
      <br />
      <div className="container border rounded shadow">
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
            <option defaultValue={"All"}>{"All"}</option>
            {carSelection.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </form>
        <div className="container">
          <p>You can filter by Car manufacturer with the dropdown above</p>
          <Toast />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
