export default function SectionHeader({ eyebrow, title, className = "section-head reveal" }) {
  return (
    <div className={className}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}
