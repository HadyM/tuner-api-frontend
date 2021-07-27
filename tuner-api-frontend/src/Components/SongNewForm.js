import { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SongNewForm(props) {
  let history = useHistory();

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const handleInput = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleNumber = (event) => {
    setSong({ ...song, [event.target.id]: Number(event.target.value) });
  };

  const handleCheckbox = (event) => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addSong(song);
    props.history.push("/songs");
  };

  const handleCancel = () => {
    history.push("/");
  };

  return (
    <div className="New">
      <Form onSubmit={handleSubmit} className="Form">
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            id="name"
            type="text"
            value={song.name}
            onChange={handleInput}
            placeholder="Please enter the title of the song..."
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Artist</Form.Label>
          <Form.Control
            id="artist"
            type="text"
            value={song.artist}
            onChange={handleInput}
            placeholder="Please enter the artists name..."
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Album</Form.Label>
          <Form.Control
            id="album"
            type="text"
            value={song.album}
            onChange={handleInput}
            placeholder="Please enter the title of the album..."
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Time</Form.Label>
          <Form.Control
            id="time"
            type="number"
            value={song.time}
            onChange={handleNumber}
            placeholder="Please enter the year of the song release..."
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Check
            id="is_favorite"
            type="checkbox"
            label="Check if Song is Favorite"
            onChange={handleCheckbox}
            value={song.is_favorite}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>{" "}
        <Button variant="primary" onClick={handleCancel}>
          Cancel
        </Button>
      </Form>
    </div>
  );
}

export default withRouter(SongNewForm);
