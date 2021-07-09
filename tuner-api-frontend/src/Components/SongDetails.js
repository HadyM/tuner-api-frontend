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
    axios.get(`${API_BASE}/songs/${index}`).then((response) => {
      const { data } = response;
      setSong(data).catch((e) => {
        history.push("/not-found");
      });
    });
  }, [index, history]);

  const handleDelete = () => {
    deleteSong(index);
    history.push("/songs");
  };

  return <div></div>;
}

export default withRouter(SongDetails);
