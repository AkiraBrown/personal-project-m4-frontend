import React from "react";
import Spinner from "./components/common/Spinner/Spinner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Nav = React.lazy(() => import("./components/Nav/Nav.js"));
const Home = React.lazy(() => import("./components/Home/Home.js"));
const Edit = React.lazy(() => import("./components/EditPage/EditPage.js"));
const NewCar = React.lazy(() => import("./components/NewCar/NewCar.js"));
const ShowPage = React.lazy(() => import("./components/ShowPage/ShowPage.js"));

const Error = React.lazy(() => import("./components/Error/Error.js"));

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<Spinner />}>
        <Router>
          <Nav />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/:id"} element={<ShowPage />} />
            <Route path={"/edit/:id"} element={<Edit />} />
            <Route path={"/new-car"} element={<NewCar />} />
            <Route path={"*"} element={<Error />} />
          </Routes>
        </Router>
      </React.Suspense>
    </div>
  );
}

export default App;
