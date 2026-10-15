function TournamentCard({ tournament }) {

  return (
    <div className="tournament-card">

      <h2>{tournament.name}</h2>

      <p>
        🎮 Game: {tournament.game}
      </p>

      <p>
        👥 Teams: {tournament.teams}
      </p>

      <p>
        📅 Date: {tournament.date}
      </p>

      <p>
        🏆 Prize: ₹{tournament.prize}
      </p>

      <button>
        Register
      </button>

    </div>
  );
}

export default TournamentCard;