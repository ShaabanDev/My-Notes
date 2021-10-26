
let notes = settAndGetNotes()
let filterText = {
    'searchText':'',
    'sortType':''
} 

renderNotes(notes,filterText)

document.querySelector('#search-input').addEventListener('input',(e)=>{

    filterText.searchText = e.target.value
    renderNotes(notes,filterText)
    
})

document.querySelector('#add-notes').addEventListener('click',(e)=>{
    const id = uuidv4()
    const timestamp = moment().valueOf()
    notes.push({
        'id':id,
        'title':'',
        'body':'',
        'createdAt':timestamp,
        'editedAt':timestamp
    })
    saveNotes()
    location.assign(`edite-note.html#${id}`)
})

document.querySelector('#filter-by').addEventListener('change',(e)=>{
    filterText.sortType=e.target.value
    renderNotes(notes,filterText)
})

document.querySelector('#filter-by').addEventListener('change',(e)=>{
    notes=  sortNotes(notes,filterText)
    renderNotes(notes,filterText)
})

window.addEventListener('storage',(e)=>{
    if(e.key==='notes'){
        notes=JSON.parse(e.newValue)
        renderNotes(notes,filterText)
    }
})
