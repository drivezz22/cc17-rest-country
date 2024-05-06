import React, { useEffect } from "react";
import { Marker, Popup, useMap } from "react-leaflet";

function CountryMap({ lat, lng, capital }) {
  const map = useMap();

  useEffect(() => {
    // set Center ของ MapContainer ใหม่
    map.setView([lat, lng]);
  }, [lat, lng]);

  return (
    <Marker position={[lat, lng]}>
      <Popup>{capital.join(", ")}</Popup>
    </Marker>
  );
}

export default CountryMap;
