export default function SmallCard({ title, chart }) {
  return (
    <div className="card shadow small-card">
      <div className="card-body">
        <div className="card-title">
          <p className="fw-light mt-1 fs-4">{title}</p>
        </div>
        <div
          className="card-chart"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {chart}
        </div>
      </div>
    </div>
  );
}
