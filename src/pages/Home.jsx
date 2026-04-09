import { recommendations } from '../mockData.js';

export default function Home() {
  return (
    <section className="page-section home-page">
      <div className="hero-panel">
        <h2>Smart learning system that adapts to you.</h2>
        <p>
          Discover courses and recommended learning paths tailored to your skill level, goals, and study habits.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="/login">Get Started</a>
          <a className="button secondary" href="/demo">View Demo</a>
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
        <article>
          <h3>Quizzes for evaluation</h3>
          <p>Evaluates the user's performance through quiz and the system adapts to the user learning speed</p>
        </article>
      </div>

    </section>
  );
}
