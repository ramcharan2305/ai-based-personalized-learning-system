import { userPerformance, recommendations } from '../mockData.js';

export default function Dashboard() {
  return (
    <section className="page-section dashboard-page">
      <div className="dashboard-hero">
        <div>
          <h2>Dashboard</h2>
          <p>Track your learning progress and get personalized actions every day.</p>
        </div>
        <div className="status-chip">Progress: 78%</div>
      </div>

      <div className="dashboard-grid">
        <div className="performance-card">
          <h3>Your performance</h3>
          <ul>
            {userPerformance.map((item) => (
              <li key={item.skill}>
                <strong>{item.skill}</strong>
                <span>{item.score}% mastery</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="recommendation-card">
          <h3>Next steps</h3>
          {recommendations.slice(0, 3).map((item) => (
            <article key={item.id} className="next-step">
              <h4>{item.title}</h4>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
