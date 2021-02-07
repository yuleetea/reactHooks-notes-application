import React, { useState, useContext, useEffect, useRef } from "react";
import NotesContext from "../context/notes-context";
import { ADD_NOTE } from "../context/actions-notes";
import { Button } from "reactstrap";

function AddNote() {
  const { dispatch } = useContext(NotesContext);
  const [value, setValue] = useState("");

  let ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (value.trim() === "") {
      alert("Must provide a note");
    } else {
      dispatch({ type: ADD_NOTE, payload: value });
    }

    setValue("");
  };

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <form action="" onSubmit={onSubmitHandler}>
        <br />
        <input
          type="text"
          placeholder="Note here"
          ref={ref}
          onChange={onChangeHandler}
          value={value}
        />
        <Button className="button" color="info">
          Add Note
        </Button>
      </form>
    </div>
  );
}

export default AddNote;
