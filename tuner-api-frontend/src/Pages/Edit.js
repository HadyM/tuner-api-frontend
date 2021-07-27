import SongEditForm from "../Components/SongEditForm";

function Edit({ updateSong, songs }) {
  return (
    <div className="New Edit">
      <h1>Edit Song Details</h1>
      <SongEditForm updateSong={updateSong} songs={songs} />
    </div>
  );
}

export default Edit;
