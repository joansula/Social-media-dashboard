import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import TopCards from "./components/TopCards";
import BigCard from "./components/BigCard";
import SmallCard from "./components/SmallCard";
import BarChart from "./components/BarChart";
import RadialChart from "./components/RadialChart";
import Newfollowers from "./components/NewFollowers";
import AreaChart from "./components/AreaChart";
import HeatMap from "./components/HeatMap";

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <div
        className="row"
        style={{ "margin-top": "5rem", "margin-left": "25rem" }}
      >
        <TopCards bgColor="#FB8B24" title="Emails sent" value="1,226" />
        <TopCards bgColor="#D90368" title="Subscribers" value="+23" />
        <TopCards bgColor="#04A777" title="Followers" value="+342" />
        <TopCards bgColor="#D8DDDE" title="Revenue" value="+78%" />
      </div>
      <div className="row" style={{ "margin-left": "25rem" }}>
        <BigCard title="Monthly reports" content={<BarChart />} />
        <SmallCard title="Progress" content={<RadialChart />} />
        <Newfollowers />
      </div>
      <div
        className="row"
        style={{ "margin-bottom": "1rem", "margin-left": "25rem" }}
      >
        <BigCard title="Ad activity" content={<AreaChart />} />
        <BigCard title="Weekly reports" content={<HeatMap />} />
      </div>
    </div>
  );
}

export default App;
