import Navbar from "/src/components/ui/Navbar.jsx";
import BarChart from "/src/components/charts/BarChart.jsx";
import TopNavbar from "/src/components/ui/TopNavbar.jsx";
export default function MonthlyReport() {
  return (
    <div className="container-fluid">
      <Navbar />
      <div className="row">
        <TopNavbar pageTitle="Monthly Report" />
      </div>
      <div
        className="row"
        style={{ "margin-top": "10rem", "margin-left": "25rem" }}
      >
        <BarChart />
      </div>
    </div>
  );
}
