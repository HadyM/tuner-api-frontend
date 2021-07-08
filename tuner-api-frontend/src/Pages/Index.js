import Songs from "../Components/Songs";

function Index({ songs }) {
  return (
    <div className="Index">
      <h1>Tuner Playlist</h1>
      <Songs songs={songs} />
    </div>
  );
}

export default Index;
