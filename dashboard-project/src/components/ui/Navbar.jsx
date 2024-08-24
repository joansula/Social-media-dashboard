import appLogo from "./appLogo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="vertical-navbar navbar-expand-lg shadow-lg">
      <li className="nav-item d-block text-center mt-5 ml-3">
        <img src={appLogo} height="100px" alt="App Logo" />
      </li>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <ul className="nav flex-column">
        <li className="nav-item mt-2 ml-3">
          <Link className="nav-title d-block text-center" to="/">
            InsightHub
          </Link>
        </li>
        <li className="nav-item mt-3">
          <Link className="nav-link" to="/">
            <i className="fa-solid fa-solar-panel"></i> Dashboard
          </Link>
        </li>
        <li className="nav-item mt-3">
          <Link className="nav-link" to="/calendar">
            <i className="fa-solid fa-calendar-days"></i> Calendar
          </Link>
        </li>
        <li className="nav-item mt-3">
          <Link className="nav-link" to="/monthly-report">
            <i className="fa-solid fa-chart-simple"></i> Monthly Report
          </Link>
        </li>
        <li className="nav-item mt-3">
          <Link className="nav-link" to="/weekly-report">
            <i className="fa-solid fa-diagram-project"></i> Weekly Report
          </Link>
        </li>
        <li className="nav-item mt-3">
          <Link className="nav-link" to="/ad-activity">
            <i className="fa-solid fa-chart-line"></i> Ad Activity
          </Link>
        </li>
      </ul>
    </div>
  );
}
