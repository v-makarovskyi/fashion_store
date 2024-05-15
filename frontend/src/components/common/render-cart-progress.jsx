import React from "react";
import useCartInfo from "@/hooks/use-cart-info";

const RenderCartProgress = () => {
  const { total } = useCartInfo();
  const freeShippingThreshold = 3500;
  const progress = (total / freeShippingThreshold) * 100;
  if (total < freeShippingThreshold) {
    const remmainingAmount = freeShippingThreshold - total;
    return (
      <>
        <p>{`Add $${remmainingAmount.toFixed(
          2
        )} more to qualify for free shipping `}</p>
        <div className="progress" aria-label="progress bar" role="progressbar">
            <div 
            className="progress-bar progress-bar-striped progress-bar-animated"
            data-width={`${progress}%`}
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{width: `${progress}%`}}
            ></div>
        </div>
      </>
    );
  }

  return (
    <>
        <p>You are eligible for free shipping</p>
        <div className="progress" aria-label="progress bar" role="progressbar">
            <div 
            className="progress-bar progress-bar-striped progress-bar-animated"
            data-width={`${progress}%`}
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{width: `${progress}%`}} 
            ></div>
        </div>
    </>
  )
};

export default RenderCartProgress;
