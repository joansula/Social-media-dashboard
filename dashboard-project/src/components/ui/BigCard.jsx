export default function BigCard({ title, content }) {
  return (
    <div className="card shadow big-card">
      <div className="card-body">
        <div className="card-title">
          <p className="fw-light mt-1 fs-4">{title}</p>
        </div>
        <div className="card-chart mb-1">{content}</div>
      </div>
    </div>
  );
}
