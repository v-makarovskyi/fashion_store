import React from "react";
import Loader from "../loader";

const SingleLoader = ({ isLoading }) => {
    return (
        <div className="col d-flex align-items-center justify-content-center" style={{height: '250px'}}>
            <Loader loading={isLoading} />
        </div>
    )
}

const HomePopularProductLoader = ({ isLoading }) => {
    return (
        <div className="row row-cols-xl-5 row-cols-lg-5 row-cols-md-4">
            <SingleLoader isLoading={isLoading} />
            <SingleLoader isLoading={isLoading} />
            <SingleLoader isLoading={isLoading} />
            <SingleLoader isLoading={isLoading} />
            <SingleLoader isLoading={isLoading} />
        </div>
    )
}

export default HomePopularProductLoader