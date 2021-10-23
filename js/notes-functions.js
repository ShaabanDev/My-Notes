const notesDiv = document.querySelector("#notes");
const settAndGetNotes = () => {
  const notesJSON = localStorage.getItem("notes");
  if (notesJSON !== null) {
    return JSON.parse(notesJSON);
  } else {
    return [];
  }
};

const removeNote = (noteID)=>{
 const noteIndex= notes.findIndex((note)=>note.id===noteID)
 notes.splice(noteIndex,1)
 saveNotes()
 renderNotes(notes,filterText)
}
const generateNotDom = (note)=>{
   const noteEl= document.createElement('div')
   const textEl=document.createElement('a')
   const buttonEl = document.createElement('button')

   textEl.textContent = note.title
   textEl.setAttribute('href','../edite-note.html')
   buttonEl.textContent = 'x'
   buttonEl.addEventListener('click',(e)=>{
    removeNote(note.id)
   })
   noteEl.appendChild(buttonEl)
   noteEl.appendChild(textEl)
   return noteEl
}

const saveNotes = () => {
  localStorage.setItem("notes", JSON.stringify(notes));
};
const renderNotes = (notes, filterText) => {
  let filteredNotes = notes.filter((element) =>
    element.title.toLowerCase().includes(filterText.searchText)
  );
  notesDiv.innerHTML =""
  filteredNotes.forEach((element) => {
    const noteEl = generateNotDom(element)
    notesDiv.appendChild(noteEl);
  });
};
