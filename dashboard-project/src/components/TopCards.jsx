export default function TopCards({ bgColor, title, value }) {
  return (
    <div className="card shadow top-card" style={{ backgroundColor: bgColor }}>
      <div className="card-body ml-3">
        <p className="fw-light">{title}</p>
        <p className="fw-bold fs-1 lh-1">{value}</p>
      </div>
    </div>
  );
}
