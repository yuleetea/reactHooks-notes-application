import React, { useReducer, useContext } from "react";
import NotesContext from "./context/notes-context";
import reducer from "./context/reducer";
import "./App.css";
import Header from "./components/Header";
import NoteList from "./components/NoteList";
import AddNote from "./components/AddNote";
import EditNote from "./components/EditNote";

function App() {
  const initialState = useContext(NotesContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <Header />
      <NotesContext.Provider
        value={{
          state,
          dispatch,
        }}
      >
        {state.currentNotes === null ? (
          <div>
            <AddNote />
            <NoteList />
          </div>
        ) : (
          <EditNote />
        )}
      </NotesContext.Provider>
    </div>
  );
}

export default App;
