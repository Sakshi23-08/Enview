import React from "react";
import "./App.css";
import SearchBar1 from "./Components/SearchBar";
import SearchBar2 from "./Components/SearchBar2";
import SearchBar3 from "./Components/SearchBar3";
import Card1 from "./Components/Card";
import Card2 from "./Components/Card2";
import BookData from "./Data.json";

function App() {
  return (
    <div>
      <div>
        <div className="App">
        <SearchBar1 className="S1" placeholder="Search..." data={BookData} />
        <SearchBar2 className="S2" placeholder="Vehicle No..." data={BookData} />
        <SearchBar3 className="S3" placeholder="DateRange 2023/03/01 to 2023/03/02" data={BookData} />
        </div>  
        <p>
          <h1 className="alert"> Alerts </h1>
          </p> 
    </div>
    <div className="cardsdiv">
      <Card1></Card1>
      <Card2></Card2>
    </div>
  </div>
  );
}

export default App;
