const noteId=location.hash.substring(1)
let notes = settAndGetNotes()
let note = notes.find((note)=>note.id===noteId)
const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove')
titleElement.value =  note.title
bodyElement.value =  note.body

titleElement.addEventListener('input',(e)=>{
    
    note.title = e.target.value
    note.editedAt = moment().valueOf()
    saveNotes();
})
bodyElement.addEventListener('input',(e)=>{
    note.body = e.target.value
    note.editedAt = moment().valueOf()
    saveNotes();
})

removeElement.addEventListener('click',(e)=>{
    removeNote(noteId)
    saveNotes()
    location.assign('index.html')
})

