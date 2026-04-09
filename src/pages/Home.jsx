import { recommendations } from '../mockData.js';

export default function Home() {
  return (
    <section className="page-section home-page">
      <div className="hero-panel">
        <h2>Smart learning system that adapts to you.</h2>
        <p>
          Discover courses and recommendations tailored to your skill level, goals, and study habits.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="/login">Get Started</a>
          <a className="button secondary" href="/dashboard">View Demo</a>
        </div>
      </div>

      <div className="info-grid">
        <article>
          <h3>Personalized learning path</h3>
          <p>Content adapts to performance, recommending the next best topic instantly.</p>
        </article>
        <article>
          <h3>Progress tracking</h3>
          <p>Monitor strengths, weaknesses, and time spent on each skill area.</p>
        </article>
        <article>
          <h3>Responsive experience</h3>
          <p>Designed to work on desktop and mobile screens alike.</p>
        </article>
      </div>

      <div className="recommendations-card">
        <h3>Recommended for you</h3>
        <div className="recommendation-list">
          {recommendations.map((item) => (
            <div key={item.id} className="recommendation-item">
              <h4>{item.title}</h4>
              <p>{item.summary}</p>
              <span>{item.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
