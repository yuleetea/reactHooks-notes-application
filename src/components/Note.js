import React, { useContext } from "react";
import NotesContext from "../context/notes-context";
import { SET_CURRENT_NOTE, DELETE_NOTE } from "../context/actions-notes";
import { Button } from "reactstrap";

function Note({ note }) {
  const { dispatch } = useContext(NotesContext);
  return (
    <div className="notes">
      <p className="note-text"> {note.text} </p>
      <Button
        className="button"
        color="info"
        onClick={() => dispatch({ type: SET_CURRENT_NOTE, payload: note })}
      >
        Edit
      </Button>
      <Button
        className="button"
        color="danger"
        onClick={() => dispatch({ type: DELETE_NOTE, payload: note.id })}
      >
        Delete
      </Button>
    </div>
  );
}

export default Note;
