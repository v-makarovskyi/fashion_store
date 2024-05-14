import React from "react";
import Loader from "../loader";

const SingleLoader = ({ loading }) => {
  return (
    <div
      className="col-xl-3 col-lg-4 col-md-6 col-sm-6 d-flex align-items-centr justify-content-center"
      style={{ height: "300px" }}
    >
      <Loader loading={loading} />
    </div>
  );
};

const HomePrdLoader = ({ isLoading }) => {
  return <div className="row row-cols-xl-5 row-cols-lg-5 row-cols-md-4">
    <SingleLoader loading={isLoading} />
    <SingleLoader loading={isLoading} />
    <SingleLoader loading={isLoading} />
    <SingleLoader loading={isLoading} />
    <SingleLoader loading={isLoading} />
    <SingleLoader loading={isLoading} />
    <SingleLoader loading={isLoading} />
    <SingleLoader loading={isLoading} />
  </div>;
};

export default HomePrdLoader
