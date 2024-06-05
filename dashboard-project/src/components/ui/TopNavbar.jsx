export default function TopNavbar({ pageTitle }) {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light shadow-sm"
      style={{ zIndex: "-1" }}
    >
      <div className="container-fluid">
        <b className="navbar-brand fs-1" style={{ marginLeft: "26rem" }}>
          {pageTitle}
        </b>
        <div
          className="collapse navbar-collapse d-flex justify-content-end me-4"
          id="navbarSupportedContent"
        >
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search followers, activity, reports..."
              aria-label="Search"
              style={{ width: "21rem" }}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
