import Song from "./Song";
import Table from "react-bootstrap/Table";

function Songs({ songs }) {
  return (
    <div className="Songs">
      <section>
        <Table bordered hover>
          <thead>
            <tr>
              <th></th>
              <th>Artist</th>
              <th>Album</th>
              <th>Name</th>
              <th>Release</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, index) => {
              return <Song key={index} song={song} id={index} />;
            })}
          </tbody>
        </Table>
      </section>
    </div>
  );
}

export default Songs;
