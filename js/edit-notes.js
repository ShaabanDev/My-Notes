const noteId = location.hash.substring(1);
let notes = settAndGetNotes();
let note = notes.find((note) => note.id === noteId);
const titleElement = document.querySelector("#note-title");
const bodyElement = document.querySelector("#note-body");
const removeElement = document.querySelector("#remove");
const lastEditedElement = document.querySelector("#lastEdited");
titleElement.value = note.title;
bodyElement.value = note.body;
lastEditedElement.textContent = generateTimeAgo(note.editedAt);
titleElement.addEventListener("input", (e) => {
  note.title = e.target.value;
  note.editedAt = moment().valueOf();
  lastEditedElement.textContent = generateTimeAgo(note.editedAt);
  saveNotes();
});
bodyElement.addEventListener("input", (e) => {
  note.body = e.target.value;
  note.editedAt = moment().valueOf();
  lastEditedElement.textContent = generateTimeAgo(note.editedAt);
  saveNotes();
});

removeElement.addEventListener("click", (e) => {
  removeNote(noteId);
  saveNotes();
  location.assign("index.html");
});

window.addEventListener("storage", (e) => {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    note = notes.find((note) => note.id === noteId);
    titleElement.value = note.title;
    bodyElement.value = note.body;
    lastEditedElement.textContent = generateTimeAgo(note.editedAt);
  }
});
