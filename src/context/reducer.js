import {
  SET_CURRENT_NOTE,
  DELETE_NOTE,
  ADD_NOTE,
  UPDATE_NOTE,
} from "./actions-notes";
import { v4 as uuid } from "uuid";

// in switch statements, its helpful to think about what function statements will help the return statement
const reducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENT_NOTE:
      return {
        ...state,
        currentNotes: action.payload,
      };
    case DELETE_NOTE:
      const deleteNote = state.notes.filter(
        (note) => note.id !== action.payload
      );
      return {
        ...state,
        notes: deleteNote,
      };
    case ADD_NOTE:
      // we need to create a note object
      const newNote = {
        id: uuid(),
        text: action.payload,
      };
      // addedNotes, we want to ADD notes which means we maintain our current state notes and ADD the newNote value
      const addedNotes = [...state.notes, newNote];

      // now were going to return the spread state, and set the notes equal to our addNotes
      return {
        ...state,
        notes: addedNotes,
      };
    case UPDATE_NOTE:
      // we want to first set the currentNote state, and set the text to the payload
      const updateNote = {
        ...state.currentNotes,
        text: action.payload,
      };

      const updatedNotes = state.notes.map((note) =>
        note.id === state.currentNotes.id ? updateNote : note
      );

      /* const updatedNotes = state.notes.map(note => if(note.id === state.currentNotes.id) {
          return updateNotes
      } else {
          return note
      } */

      return {
        currentNotes: null,
        notes: updatedNotes,
      };
    default:
      return state;
  }
};

export default reducer;
