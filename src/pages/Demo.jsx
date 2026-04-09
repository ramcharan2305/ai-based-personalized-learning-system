import { useState } from 'react';

const roadmapExamples = {
  beginner: [
    'Start with the fundamentals and build a strong foundation.',
    'Complete 3 basic modules and review example problems.',
    'Practice with small quizzes and record your progress weekly.'
  ],
  intermediate: [
    'Focus on core concepts and apply them to real exercises.',
    'Use mixed practice sets and revise any weak areas.',
    'Prepare with timed practice and summarize your learnings.'
  ],
  advanced: [
    'Work on advanced problems and refine your strategy.',
    'Simulate full academic/test-style exams.',
    'Review mistakes and deepen conceptual understanding.'
  ]
};

export default function Demo() {
  const [subject, setSubject] = useState('Mathematics');
  const [level, setLevel] = useState('beginner');
  const [goal, setGoal] = useState('academics');
  const [roadmap, setRoadmap] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setRoadmap({
      subject,
      level,
      goal,
      steps: roadmapExamples[level]
    });
  }

  return (
    <section className="page-section dashboard-page">
      <div className="dashboard-hero">
        <div>
          <h2>Learning Roadmap Demo</h2>
          <p>Enter your subject, current level, and study goal to generate a sample roadmap.</p>
        </div>
      </div>

      <div className="roadmap-demo-card">
        <h3>Build your sample roadmap</h3>
        <form className="roadmap-form" onSubmit={handleSubmit}>
          <label>
            Subject
            <input
              type="text"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              required
            />
          </label>

          <label>
            Current level
            <select value={level} onChange={(event) => setLevel(event.target.value)}>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </label>

          <label>
            Study goal
            <select value={goal} onChange={(event) => setGoal(event.target.value)}>
              <option value="academics">For academics</option>
              <option value="test">For test</option>
            </select>
          </label>

          <button type="submit" className="button primary">
            Generate roadmap
          </button>
        </form>

        {roadmap && (
          <div className="roadmap-result">
            <h4>Sample roadmap for {roadmap.subject}</h4>
            <p>
              You are at <strong>{roadmap.level}</strong> level and studying <strong>{roadmap.goal === 'academics' ? 'for academics' : 'for a test'}</strong>.
            </p>
            <ol>
              {roadmap.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
            <p className="note">This is an example learning roadmap. Adjust it as needed for your real study plan.</p>
          </div>
        )}
      </div>
    </section>
  );
}
