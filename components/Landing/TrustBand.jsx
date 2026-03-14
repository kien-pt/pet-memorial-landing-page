import { TrustPoints } from "./LandingData";

export default function TrustBand() {
  return (
    <section className="trust-band">
      <div className="container trust-grid reveal">
        {TrustPoints.map((item) => (
          <article key={item.label} className="trust-card">
            <strong>{item.value}</strong>
            <h3>{item.label}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
