import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <h1 cladssName="hero-title">
        Insight & Analysis from <br />
        <span>Leading Legal Minds</span>
      </h1>

      <p className="hero-subtitle">
        Explore our repository of legal research, articles, and white papers
        on the most pressing issues in law and governance today.
      </p>

      <div className="hero-buttons">
        <button className="primary">Browse Volumes </button>
        <button className="secondary">Call for Papers</button>
      </div>
    </section>
  );
}
