

let notes = settAndGetNotes()
let filterText = {
    'searchText':'',
}

renderNotes(notes,filterText)

document.querySelector('#search-input').addEventListener('input',(e)=>{

    filterText.searchText = e.target.value
    renderNotes(notes,filterText)
    
})

document.querySelector('#add-notes').addEventListener('click',(e)=>{
    const id = uuidv4()
    notes.push({
        'id':id,
        'title':'',
        'body':'',
    })
    saveNotes()
    location.assign('edite-note.html')
})