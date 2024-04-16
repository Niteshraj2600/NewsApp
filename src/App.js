import React from "react";
import Navbar from "./Component/Navbar";
import News1 from "./Component/News1";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <News1 key="general" pageSize={5} country="in" category="general" />
          }
        ></Route>
        <Route
          exact
          path="/business"
          element={
            <News1
              key="business"
              pageSize={5}
              country="in"
              category="business"
            />
          }
        ></Route>
        <Route
          path="/entertainment"
          element={
            <News1
              key="entetainment"
              pageSize={5}
              country="in"
              category="entetainment"
            />
          }
        ></Route>
        <Route
          exact
          path="/health"
          element={
            <News1 key="health" pageSize={5} country="in" category="health" />
          }
        ></Route>
        <Route
          path="/science"
          element={
            <News1 key="science" pageSize={5} country="in" category="science" />
          }
        ></Route>
        <Route
          exact
          path="/sports"
          element={
            <News1 key="sports" pageSize={5} country="in" category="sports" />
          }
        ></Route>
        <Route
          exact
          path="/technology"
          element={
            <News1
              key="technology"
              pageSize={5}
              country="in"
              category="technology"
            />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
