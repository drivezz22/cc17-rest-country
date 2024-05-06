import axios, { all } from "axios";
import React, { useEffect, useState } from "react";
import CountryItem from "./CountryItem";

function CountryList() {
  // 1st run(init), # 8th (allCountries !== [])
  const [allCountries, setAllCountries] = useState([]);

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
        return obj;
      });
      // 7th : setState
      setAllCountries(data);
    } catch (error) {
      console.log(error);
    }
  };

  // 3rd run : Render, #10th Re-render
  return (
    <main className="main">
      <header className="header">
        <h1 className="header__text">Find Your Destination</h1>
      </header>
      <div className="search">
        <input className="search__input" />
        <button className="search__btn">search</button>
      </div>
      <div className="country">
        {allCountries.length > 0 &&
          allCountries.map((country, index) => <CountryItem key={index} country={country} />)}
      </div>
    </main>
  );
}

export default CountryList;
