/* eslint-disable react/prop-types */

import "./App.scss";
import BucketList from "./components/bucket-list/BucketList";
import CountryDetail from "./components/country-detail/CountryDetail";
import CountryList from "./components/country-list/CountryList";

function App() {
  return (
    <div className="app">
      <CountryList />
      <CountryDetail />
      <BucketList />
    </div>
  );
}

export default App;
