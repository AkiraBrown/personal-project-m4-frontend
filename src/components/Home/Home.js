import React, { useState, useEffect } from "react";
import { getAllCars } from "../common/API/API";

import Overlay from "../common/Overlay/Overlay";
import Card from "../common/Cards/Card";
import Sidebar from "../Sidebar/Sidebar";

function Home() {
  const [carArr, setCarArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    grabData();
  }, []);

  async function grabData() {
    try {
      setIsLoading(true);
      let result = await getAllCars();
      console.log(result.data);
      setCarArr(result.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="container row">
      <Overlay isLoading={isLoading}>
        <br />
        <Sidebar />
        <div className="container col-8">
          <br />
          <div className="container grid gap-0 row-gap-3">
            {carArr.map((item) => {
              return <Card item={item} key={item.id} />;
            })}
          </div>
        </div>
      </Overlay>
    </div>
  );
}

export default Home;
