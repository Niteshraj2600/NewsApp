import React from "react";
import loading from "./loading.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <img src={loading} alt="loading" height={"400px"} />
    </div>
  );
};

export default Spinner;
