import { useState } from "react";
import { useParams } from "react-router-dom";
import SongDetails from "../Components/SongDetails";

function Show({ songs, deleteSong }) {
  let { index } = useParams();
  const [song] = useState(songs[index]);

  return (
    <div className="Show">
      <h1>📀 💿 Song Details 💿 📀</h1>
      <section>
        <SongDetails song={song} index={index} deleteSong={deleteSong} />
      </section>
    </div>
  );
}

export default Show;
