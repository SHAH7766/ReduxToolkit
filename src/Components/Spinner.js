import React from "react";

const Spinner = () => {
  return (
    <>
      <div style={{marginTop:"100px"}} className="spinner-grow " role="status">
        <span  className="visually-hidden ">Loading...</span>
      </div>
    </>
  );
};

export default Spinner;
