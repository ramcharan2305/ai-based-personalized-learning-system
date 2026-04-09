export default function Login() {
  return (
    <section className="page-section login-page">
      <div className="form-frame">
        <h2>Welcome back</h2>
        <p>Sign in to continue your adaptive learning journey.</p>
        <form>
          <label>
            Email address
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="Enter password" />
          </label>
          <button type="button" className="button primary">Sign In</button>
        </form>
      </div>
    </section>
  );
}
