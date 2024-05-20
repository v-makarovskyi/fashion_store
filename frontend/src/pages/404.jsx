import React from "react";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/headers/header";
import Footer from "@/layout/footers/footer";
import error from "@assets/img/error/error.png";
import Image from "next/image";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="404" />
      <Header />
      <section className="tp-error-area pt-110 pb-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col col-md-10 col-lg-8 col-xl-6">
              <div className="tp-error-content text-center">
                <div className="tp-error-thumb">
                  <Image src={error} alt="error-img" />
                </div>
                <h3 className="tp-error-title">Oops! Page Not Found</h3>
                <p>
                  {" "}
                  We can't seem to find that page. It might have been removed or
                  doesn't exist anymore.
                </p>
                <Link href="/" className="tp-error-btn">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Wrapper>
  );
};

export default ErrorPage;
