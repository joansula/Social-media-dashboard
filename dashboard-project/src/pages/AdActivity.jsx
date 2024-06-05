import Navbar from "/src/components/ui/Navbar.jsx";
import AreaChart from "/src/components/charts/AreaChart.jsx";
import TopNavbar from "/src/components/ui/TopNavbar.jsx";
export default function AdActivity() {
  return (
    <div className="container-fluid">
      <Navbar />
      <div className="row">
        <TopNavbar pageTitle="Ad Activity" />
      </div>
      <div
        className="row"
        style={{ "margin-top": "10rem", "margin-left": "25rem" }}
      >
        <AreaChart />
      </div>
    </div>
  );
}
