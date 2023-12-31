import React, {
  useState,
  useEffect,
  // useContext
} from "react";
import { getAllCars } from "../common/API/API";

import Overlay from "../common/Overlay/Overlay";
import Card from "../common/Cards/Card";
import Sidebar from "../Sidebar/Sidebar";

import {
  SidebarContext,
  //  ToastContext
} from "../common/context/context";

function Home() {
  // const { toastArr, setToastArr } = useContext(ToastContext);
  const [carArr, setCarArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [carMake, setCarMake] = useState("");
  // const [selectBody, setSelectBody] = useState("");
  // const [selectColor, setSelectColor] = useState("");

  const [carBody, setCarBody] = useState([]);
  const [carSelection, setCarSelect] = useState([]);
  const [colorSelection, setColorSelect] = useState([]);

  useEffect(() => {
    grabData();
  }, []);

  const ScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const sideBarContextValue = {
    carMake,
    // selectBody,
    carSelection,
    carBody,
    // selectColor,
    colorSelection,
    setCarArr,
    setIsLoading,
    setCarMake,
  };

  async function grabData() {
    try {
      setIsLoading(true);
      let result = await getAllCars();
      console.log(result.data);
      result = result.data;
      const allCarMakes = result.map(({ car_make }) => car_make);
      const allBodyTypes = result.map(({ body_type }) => body_type);
      let allColors = result.map(({ color_options }) => color_options);
      allColors = allColors.toString();
      allColors = allColors.split(",");
      allColors = [...new Set(allColors)];

      console.log(allColors);
      let bodyTypesFilter = [...new Set(allBodyTypes)];
      console.log(bodyTypesFilter);
      let filteredCarMakes = [...new Set(allCarMakes)];
      console.log(filteredCarMakes);

      setColorSelect(allColors);
      setCarBody(bodyTypesFilter);
      setCarSelect(filteredCarMakes);
      setCarArr(result);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="container row">
      <Overlay isLoading={isLoading}>
        <br />
        <SidebarContext.Provider value={sideBarContextValue}>
          <Sidebar />
        </SidebarContext.Provider>
        <div className="container col-8">
          <br />
          <div className="container grid gap-0 row-gap-3">
            {carArr.map((item) => {
              return <Card item={item} key={item.id} />;
            })}
          </div>
          <div className="position-fixed bottom-0 end-0 mb-3 me-3">
            <button
              className="btn btn-primary py-2 d-flex align-items-center"
              onClick={ScrollToTop}
            >
              &uarr;
            </button>
          </div>
        </div>
      </Overlay>
    </div>
  );
}

export default Home;
