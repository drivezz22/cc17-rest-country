import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function CountryDetail({ selectedCountry }) {
  const [lat, lng] = selectedCountry?.latlng || [];
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
          <div className="detail__map">
            {selectedCountry?.latlng && (
              <MapContainer
                className="detail__map--container"
                center={[lat, lng]}
                zoom={8}
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[lat, lng]}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </MapContainer>
            )}
          </div>
        </>
      </>
    </section>
  );
}

export default CountryDetail;
