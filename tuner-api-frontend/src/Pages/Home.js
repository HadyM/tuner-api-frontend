import musicNotesTwo from "../Assets/musicNotesTwo.png";

function Home() {
  return (
    <div>
      <div className="Home">
        <h2>Welcome to the Tuner App!</h2>
        <h3>
          “If music be the food of love, play on.” – William Shakespeare
          <br />
          “Life seems to go on without effort when I am filled with music.” –
          George Eliot
          <br />
          “After silence, that which comes nearest to expressing the
          inexpressible is music.” – Aldous Huxley
          <br />
          “Music gives a soul to the universe, wings to the mind, flight to the
          imagination, and life to everything.” – Plato
          <br />
        </h3>
      </div>
      <div className="Image">
        <img
          src={musicNotesTwo}
          alt="musical"
          style={{ height: "600px", width: "60%" }}
        />
      </div>
    </div>
  );
}

export default Home;
