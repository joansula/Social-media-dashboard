import appLogo from "./appLogo.png";

export default function Navbar() {
  return (
    <div className="vertical-navbar shadow-lg">
      <li className="nav-item d-block text-center mt-5 ml-3">
        <img src={appLogo} height="100px" alt="App Logo" />
      </li>
      <ul className="nav flex-column">
        <li className="nav-item mt-2 ml-3">
          <a className="nav-title d-block text-center" href="#">
            InsightHub
          </a>
        </li>
        <li className="nav-item mt-3">
          <a className="nav-link active" href="#">
            <i className="fa-solid fa-solar-panel"></i> Dashboard
          </a>
        </li>
        <li className="nav-item mt-3">
          <a className="nav-link" href="#">
            <i className="fa-solid fa-calendar-days"></i> Calendar
          </a>
        </li>
        <li className="nav-item mt-3">
          <a className="nav-link active" href="#">
            <i className="fa-solid fa-chart-simple"></i> Monthly Report
          </a>
        </li>
        <li className="nav-item mt-3">
          <a className="nav-link" href="#">
            <i class="fa-solid fa-diagram-project"></i> Weekly report
          </a>
        </li>
        <li className="nav-item mt-3">
          <a className="nav-link" href="#">
            <i className="fa-solid fa-chart-line"></i> Ad activity
          </a>
        </li>
      </ul>
    </div>
  );
}
