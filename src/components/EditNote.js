import React, { useState, useContext, useEffect, useRef } from "react";
import NotesContext from "../context/notes-context";
import { UPDATE_NOTE } from "../context/actions-notes";
import { Button } from "reactstrap";

const EditNote = () => {
  const { state, dispatch } = useContext(NotesContext);
  // our state is initialised to state.currentNotes.text because this is what the base is when we go to edit the text
  const [value, setValue] = useState(state.currentNotes.text);

  let ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (value.trim() === "") {
      alert("Must submit a note");
    } else {
      dispatch({ type: UPDATE_NOTE, payload: value });
    }
  };

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <textarea
          onChange={onChangeHandler}
          value={value}
          name=""
          cols="50"
          rows="5"
          ref={ref}
        />
        <Button className="button" color="info">
          Update Note
        </Button>
      </form>
    </div>
  );
};

export default EditNote;
