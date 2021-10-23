const notesDiv = document.querySelector("#notes");
const settAndGetNotes = () => {
  const notesJSON = localStorage.getItem("notes");
  if (notesJSON !== null) {
    return JSON.parse(notesJSON);
  } else {
    return [];
  }
};

const removeNote = (noteID) => {
  const noteIndex = notes.findIndex((note) => note.id === noteID);
  notes.splice(noteIndex, 1);
};
const generateNotDom = (note) => {
  const noteEl = document.createElement("div");
  const textEl = document.createElement("a");
  const buttonEl = document.createElement("button");

  textEl.textContent = note.title;
  textEl.setAttribute("href", `edite-note.html#${note.id}`);
  buttonEl.textContent = "x";
  buttonEl.addEventListener("click", (e) => {
    removeNote(note.id);
    saveNotes();
    renderNotes(notes, filterText);
  });
  noteEl.appendChild(buttonEl);
  noteEl.appendChild(textEl);

  return noteEl;
};

const saveNotes = () => {
  localStorage.setItem("notes", JSON.stringify(notes));
};
const renderNotes = (notes, filterText) => {
  let filteredNotes = notes.filter((element) =>
    element.title.toLowerCase().includes(filterText.searchText)
  );
  notesDiv.innerHTML = "";
  filteredNotes.forEach((element) => {
    const noteEl = generateNotDom(element);
    notesDiv.appendChild(noteEl);
  });
};

const sortNotes = (notes, filterText) => {
  if (filterText.sortType === "byEdited") {
    return notes.sort((a, b) => {
      if (a.editedAt > b.editedAt) {
        return -1;
      } else if (a.editedAt < b.editedAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (filterText.sortType === "byCreated") {
    return notes.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return 1;
      } else if (a.createdAt < b.createdAt) {
        return -1;
      } else {
        return 0;
      }
    });
  } else if (filterText.sortType === "alphabetical") {
    return notes.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    return notes;
  }
};
