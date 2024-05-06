import React, { useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import CountryMap from "./CountryMap";

function CountryDetail({ selectedCountry, bucketText, setBuckerText, buckerList, setBuckerList }) {
  const [lat, lng] = selectedCountry?.latlng || [];

  useEffect(() => {
    setBuckerText("");
  }, [selectedCountry]);

  const handleBuckerText = (e) => {
    setBuckerText(e.target.value);
  };

  const updataBucketList = (e) => {
    e.preventDefault();
    if (bucketText.trim !== "" && selectedCountry !== null) {
      const filterData = buckerList.filter((b) => b.name === selectedCountry.name.common);

      if (filterData.length === 0) {
        const newData = { name: selectedCountry.name.common, text: bucketText };
        setBuckerList([...buckerList, newData]);
        setBuckerText("");
      }
    }
  };

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
                  Region : <span>{selectedCountry?.region || ""}</span>
                </span>
              </p>
              <p>
                <span className="detail__text--name">
                  {" "}
                  Population :{" "}
                  <span>{new Intl.NumberFormat().format(selectedCountry?.population || 0)}</span>
                </span>
              </p>
              <p>
                <span className="detail__text--name">
                  {" "}
                  Area : <span>{new Intl.NumberFormat().format(selectedCountry?.area || 0)}</span>
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

            <form className="detail__form" onSubmit={updataBucketList}>
              <label>Add Bucket List</label>
              <input value={bucketText} onChange={handleBuckerText} />
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
                <CountryMap lat={lat} lng={lng} capital={selectedCountry?.capital || ""} />
              </MapContainer>
            )}
          </div>
        </>
      </>
    </section>
  );
}

export default CountryDetail;
