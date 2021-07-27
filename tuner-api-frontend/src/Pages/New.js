import SongNewForm from "../Components/SongNewForm";

function New({ addSong }) {
  return (
    <div className="NewForm">
      <h1>New Song Form</h1>
      <SongNewForm addSong={addSong} />
    </div>
  );
}

export default New;
