export default function SmallCard({ title, content }) {
  return (
    <div className="card shadow small-card">
      <div className="card-title mt-3">
        <p className="fw-light fs-4" style={{ marginLeft: "1rem" }}>
          {" "}
          {title}
        </p>
      </div>
      <div className="card-body d-flex justify-content-center">
        <div className="card-chart">{content}</div>
      </div>
    </div>
  );
}
