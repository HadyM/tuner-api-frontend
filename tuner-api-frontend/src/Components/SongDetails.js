import { useState, useEffect } from "react";
import { Link, useParams, useHistory, withRouter } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";

const API_BASE = apiURL();

function SongDetails(props) {
  const { deleteSong } = props;
  const [song, setSong] = useState([]);

  let { index } = useParams();
  let history = useHistory();

  useEffect(() => {
    axios
      .get(`${API_BASE}/songs/${index}`)
      .then((response) => {
        const { data } = response;
        setSong(data);
      })
      .catch((e) => {
        history.push("/not-found");
      });
  }, [index, history]);

  const handleDelete = () => {
    deleteSong(song.id);
    history.push("/songs");
  };

  return (
    <div>
      <article>
        <h3>
          {song.is_favorite ? <span>⭐️</span> : null} {song.name}
        </h3>
        <h4>{song.artist}</h4>
        <h4>{song.album}</h4>
        <h4>{song.time}</h4>
        <div className="showNavigation">
          <div>
            <Link to={`/songs`}>
              <button>Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/songs/${index}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default withRouter(SongDetails);
