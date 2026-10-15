import { Link } from "react-router-dom";

function Home() {

  return (
    <div className="home">

      <section className="hero">

        <h1>
          Welcome to E-Sports Arena
        </h1>

        <p>
          Join tournaments, build your team,
          compete with players and become a champion.
        </p>

        <Link to="/tournaments" className="hero-btn">
          Explore Tournaments
        </Link>

      </section>


      <section className="features">

        <div className="feature-card">
          <h2>🏆 Tournaments</h2>
          <p>
            Participate in exciting gaming tournaments.
          </p>
        </div>

        <div className="feature-card">
          <h2>👥 Teams</h2>
          <p>
            Create your own team and invite players.
          </p>
        </div>

        <div className="feature-card">
          <h2>📊 Leaderboard</h2>
          <p>
            Track rankings and tournament performance.
          </p>
        </div>

      </section>

    </div>
  );
}

export default Home;