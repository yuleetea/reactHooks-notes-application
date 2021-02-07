import React, { useContext } from "react";
import Note from "./Note";
import NotesContext from "../context/notes-context";

function NoteList() {
  const { state } = useContext(NotesContext);
  return (
    <div className="notes-container">
      {state.notes.map((note) => {
        return <Note note={note} key={note.id} />;
      })}
    </div>
  );
}

export default NoteList;
