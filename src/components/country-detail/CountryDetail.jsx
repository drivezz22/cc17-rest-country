import React from "react";

function CountryDetail({ selectedCountry }) {
  return (
    <section className="detail">
      <>
        <>
          <div className="detail__text">
            <div className="detail__text--info">
              <h1>{selectedCountry?.name.common}</h1>
              <p>
                <span className="detail__text--name">
                  {" "}
                  Region : <span>{selectedCountry?.region}</span>
                </span>
              </p>
              <p>
                <span className="detail__text--name">
                  {" "}
                  Population :{" "}
                  <span>{new Intl.NumberFormat().format(selectedCountry?.population)}</span>
                </span>
              </p>
              <p>
                <span className="detail__text--name">
                  {" "}
                  Capital : <span>{selectedCountry?.capital.join(", ") || ""}</span>
                </span>
              </p>
              <p>
                <span className="detail__text--name">
                  {" "}
                  Languages :{" "}
                  <span>
                    {selectedCountry?.languages &&
                      Object.values(selectedCountry.languages).join(", ")}
                  </span>
                </span>
              </p>
              <p>
                <span className="detail__text--name">
                  {" "}
                  Borders : <span>{selectedCountry?.borders.join(", ") || ""}</span>
                </span>
              </p>
              <p>
                <span className="detail__text--name">
                  {" "}
                  Currencies :
                  <span>
                    {" "}
                    {selectedCountry?.currencies &&
                      Object.values(selectedCountry.currencies)
                        .map((c) => {
                          return c.name;
                        })
                        .join(", ")}
                  </span>
                </span>
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
