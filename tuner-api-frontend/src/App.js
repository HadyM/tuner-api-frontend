import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { apiURL } from "./util/apiURL";

import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New";
import Edit from "./Pages/Edit";

import NavBar from "./Components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const API_BASE = apiURL();

function App() {
  const [songs, setSongs] = useState([]);

  const addSong = (newSong) => {
    axios
      .post(`${API_BASE}/songs`, newSong)
      .then((response) => {
        setSongs([...songs, newSong]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteSong = (index) => {
    axios.delete(`${API_BASE}/songs/${index}`).then(
      (response) => {
        const updateArray = [...songs];
        updateArray.splice(index, 1);
        setSongs(updateArray);
      },
      (error) => {
        console.log(error);
      },
    );
  };

  const updateSong = (updatedSong, index) => {
    axios.put(`${API_BASE}/songs/${index}`, updatedSong).then(
      (response) => {
        const updateArray = [...songs];
        updateArray[index] = updatedSong;
        setSongs(updateArray);
      },
      (error) => {
        console.log(error);
      },
    );
  };

  useEffect(() => {
    axios.get(`${API_BASE}/songs`).then((response) => {
      const { data } = response;
      setSongs(data);
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/songs">
              <Index songs={songs} />
            </Route>
            <Route path="/songs/new">
              <New addSong={addSong} />
            </Route>
            <Route path="/songs/:index">
              <Show songs={songs} deleteSong={deleteSong} />
            </Route>
            <Route path="/songs/:index/edit">
              <Edit songs={songs} updateSong={updateSong} />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
