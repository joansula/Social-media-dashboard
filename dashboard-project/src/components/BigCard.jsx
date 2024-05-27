export default function BigCard({ title, chart }) {
  return (
    <div className="card shadow big-card">
      <div className="card-body">
        <div className="card-title">
          <p className="fw-light mt-1 fs-4">{title}</p>
        </div>
        <div className="card-chart mb-1">{chart}</div>
      </div>
    </div>
  );
}
