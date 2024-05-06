/* eslint-disable react/prop-types */

import "./App.scss";
import BucketList from "./components/bucket-list/BucketList";
import CountryDetail from "./components/country-detail/CountryDetail";
import CountryList from "./components/country-list/CountryList";
import { useState, useEffect } from "react";
import axios from "axios";

// Schema Country : {name:Name,flags:Flags}
function App() {
  // 1st run(init), # 8th (allCountries !== [])
  const [allCountries, setAllCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null); // null | Country
  // Fetch เสร็จให้เอาประเทศแรกเป็น selectedCountry

  // 4th run : Fetch
  useEffect(() => {
    fetchAllCountrise();
  }, []);

  // 2nd run : Declare, Register FN, # 9th Re-Declare FN
  const fetchAllCountrise = async () => {
    try {
      // 5 th run
      const response = await axios.get("https://restcountries.com/v3.1/all");
      const data = response.data.map((country) => {
        // Obj response => Obj {name:Name,flags:Flags}
        // 6th run
        let obj = {};
        obj.name = country.name;
        obj.flags = country.flags;
        obj.region = country.region;
        obj.population = country.population;
        obj.capital = country.capital || [];
        obj.languages = country.languages;
        obj.borders = country.borders || [];
        obj.currencies = country.currencies;
        return obj;
      });
      // 7th : setState
      setAllCountries(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="app">
      <CountryList allCountries={allCountries} setSelectedCountry={setSelectedCountry} />
      <CountryDetail selectedCountry={selectedCountry} />
      <BucketList />
    </div>
  );
}

export default App;
