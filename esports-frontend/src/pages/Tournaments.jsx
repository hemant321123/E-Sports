import TournamentCard from "../components/TournamentCard";

function Tournaments() {

  const tournaments = [
    {
      id: 1,
      name: "BGMI Championship",
      game: "BGMI",
      teams: 32,
      date: "20 October 2026",
      prize: "50,000"
    },

    {
      id: 2,
      name: "Valorant Masters",
      game: "Valorant",
      teams: 16,
      date: "25 October 2026",
      prize: "1,00,000"
    },

    {
      id: 3,
      name: "Free Fire Clash",
      game: "Free Fire",
      teams: 24,
      date: "30 October 2026",
      prize: "25,000"
    }
  ];


  return (

    <div className="tournaments">

      <h1>Upcoming Tournaments</h1>

      <div className="tournament-container">

        {tournaments.map((tournament) => (

          <TournamentCard
            key={tournament.id}
            tournament={tournament}
          />

        ))}

      </div>

    </div>

  );
}

export default Tournaments;


