import React from "react";

function CountryDetail() {
  return (
    <section className="detail">
      <>
        <>
          <div className="detail__text">
            <div className="detail__text--info">
              <h1>Country Name</h1>
              <p>
                <span className="detail__text--name">Region : </span>
              </p>
              <p>
                <span className="detail__text--name"> Population : </span>
              </p>
              <p>
                <span className="detail__text--name"> Capital : </span>
              </p>
              <p>
                <span className="detail__text--name"> Languages : </span>
              </p>
              <p>
                <span className="detail__text--name"> Borders : </span>
              </p>
              <p>
                <span className="detail__text--name"> Currencies : </span>
              </p>
            </div>

            <form className="detail__form">
              <label>Add Bucket List</label>
              <input />
              <button>Add </button>
            </form>
          </div>
          <div className="detail__map">Map</div>
        </>
      </>
    </section>
  );
}

export default CountryDetail;
