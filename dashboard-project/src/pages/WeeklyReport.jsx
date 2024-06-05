import Navbar from "/src/components/ui/Navbar.jsx";
import HeatMap from "/src/components/charts/HeatMap.jsx";
import TopNavbar from "/src/components/ui/TopNavbar.jsx";
export default function WeeklyReport() {
  return (
    <div className="container-fluid">
      <Navbar />
      <div className="row">
        <TopNavbar pageTitle="Weekly Report" />
      </div>
      <div
        className="row"
        style={{ "margin-top": "10rem", "margin-left": "25rem" }}
      >
        <HeatMap />
      </div>
    </div>
  );
}
