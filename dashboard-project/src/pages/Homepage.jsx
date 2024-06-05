import Navbar from "/src/components/ui/Navbar.jsx";
import TopNavbar from "/src/components/ui/TopNavbar";
import TopCards from "/src/components/ui/TopCards";
import BigCard from "/src/components/ui/BigCard";
import SmallCard from "/src/components/ui/SmallCard";
import BarChart from "/src/components/charts/BarChart";
import RadialChart from "/src/components/charts/RadialChart";
import Newfollowers from "/src/components/ui/NewFollowers";
import AreaChart from "/src/components/charts/AreaChart";
import HeatMap from "/src/components/charts/HeatMap";

export default function Homepage() {
  return (
    <div className="container-fluid">
      <Navbar />
      <div className="row">
        <TopNavbar pageTitle="Dashboard" />
      </div>
      <div
        className="row"
        style={{ "margin-top": "1rem", "margin-left": "25rem" }}
      >
        <TopCards bgColor="#FB8B24" title="Emails sent" value="1,226" />
        <TopCards bgColor="#D90368" title="Subscribers" value="+23" />
        <TopCards bgColor="#04A777" title="Followers" value="+342" />
        <TopCards bgColor="#D8DDDE" title="Active followers" value="68%" />
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
