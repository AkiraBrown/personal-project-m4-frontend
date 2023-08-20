import React, { useState } from "react";
import Spinner from "./components/common/Spinner/Spinner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContext } from "./components/common/context/context";

const Nav = React.lazy(() => import("./components/Nav/Nav.js"));
const Home = React.lazy(() => import("./components/Home/Home.js"));
const Edit = React.lazy(() => import("./components/EditPage/EditPage.js"));
const NewCar = React.lazy(() => import("./components/NewCar/NewCar.js"));
const ShowPage = React.lazy(() => import("./components/ShowPage/ShowPage.js"));
const About = React.lazy(() => import("./components/About/About.js"));

const Error = React.lazy(() => import("./components/Error/Error.js"));

function App() {
  const [toastArr, setToastArr] = useState({
    Method: "",
    Status: "",
    Name: "",
  });
  const ToastContextValue = {
    toastArr,
    setToastArr,
  };

  return (
    <div className="App">
      <React.Suspense fallback={<Spinner />}>
        <Router>
          <Nav />
          <Routes>
            <Route
              path={"/"}
              element={
                <ToastContext.Provider value={ToastContextValue}>
                  <Home />
                </ToastContext.Provider>
              }
            />
            <Route
              path={"/:id"}
              element={
                <ToastContext.Provider value={ToastContextValue}>
                  <ShowPage />
                </ToastContext.Provider>
              }
            />
            <Route
              path={"/edit/:id"}
              element={
                <ToastContext.Provider value={ToastContextValue}>
                  <Edit />
                </ToastContext.Provider>
              }
            />
            <Route
              path={"/new-car"}
              element={
                <ToastContext.Provider value={ToastContextValue}>
                  <NewCar />
                </ToastContext.Provider>
              }
            />
            <Route path={"/about"} element={<About />} />
            <Route path={"*"} element={<Error />} />
            <Route
              path={"/404"}
              element={
                <div className="alert alert-danger">404 Page Not Found</div>
              }
            />
          </Routes>
        </Router>
      </React.Suspense>
    </div>
  );
}

export default App;
