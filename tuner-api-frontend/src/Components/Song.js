import { Link } from "react-router-dom";

function Song({ song, id }) {
  return (
    <tr>
      <td>
        {song.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <h5>{song.artist}</h5>
      </td>
      <td>
        <Link to={`/songs/${id}`}>
          <h5>{song.album}</h5>
        </Link>
      </td>
      <td>
        <h5>{song.name}</h5>
      </td>
      <td>
        <h5>{song.time}</h5>
      </td>
    </tr>
  );
}

export default Song;
