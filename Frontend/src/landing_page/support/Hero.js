import React from "react";

function Hero() {
  return (
    <section
      className="container-fluid bg-primary text-white py-5"
      id="supportHero"
    >
      <div
        className="d-flex justify-content-between align-items-center px-4"
        id="supportWrapper"
      >
        <h4 className="mb-0">Support Portal</h4>
        <a href="" className="text-white text-decoration-underline">
          Track Tickets
        </a>
      </div>
      <div className="row py-4 px-3">
        <div className="col-md-6 px-4">
          <h1 className="fs-4 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            type="text"
            placeholder="Eg. how do I activate F&O"
            className="form-control mb-3"
          />
          <div className="d-flex flex-column gap-2">
            <a href="" className="text-white text-decoration-underline">
              Track account opening
            </a>
            <a href="" className="text-white text-decoration-underline">
              Track segment activation
            </a>
            <a href="" className="text-white text-decoration-underline">
              Intraday margins
            </a>
            <a href="" className="text-white text-decoration-underline">
              Kite user manual
            </a>
          </div>
        </div>
        <div className="col-md-6 px-4">
          <h1 className="fs-4 mb-4">Featured</h1>
          <ol className="ps-3">
            <li>
              <a href="" className="text-white text-decoration-underline">
                Current Takeovers and Delisting - January 2024
              </a>
            </li>
            <li>
              <a href="" className="text-white text-decoration-underline">
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
