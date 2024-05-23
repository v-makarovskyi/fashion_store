//scss file path: 'frontend/public/assets/scss/components/_breadcrumbs.scss'

import React from "react";

const CommonBreadcrumb = ({
  title,
  subtitle,
  center = false,
  bg_slr = false,
}) => {
  return (
    <section
      className={`breadcrumb__area ${
        center ? "text-center" : ""
      } include-bg pt-95 pb-50`}
      style={{ background: bg_slr && "#EFF1F5" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb__content p-relative z-index-1">
              <h3 className="breadcrumb__title">{title}</h3>
              <div className="breadcrumb__list">
                <span>
                  <a href="#">Home</a>
                </span>
                <span>{subtitle}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonBreadcrumb;
