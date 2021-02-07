import { createContext } from "react";

// we set the initialValue of createContext and use this as the initialState for our useReducer and global
const NotesContext = createContext({
  currentNotes: null,
  notes: [
    { id: 1, text: "Do homework" },
    { id: 2, text: "Eat Dinner" },
    { id: 3, text: "Workout" },
  ],
});

export default NotesContext;
