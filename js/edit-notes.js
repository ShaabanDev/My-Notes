let notes = settAndGetNotes()
const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
document.querySelector('#confirm').addEventListener('click',(e)=>{
    const titleValue = titleElement.value
    const bodeyValue = bodyElement.value
    notes.push({
        'title':titleValue,
        'body':bodeyValue,
    }
    )
    saveNotes()
    titleElement.value =''
    bodyElement.value =''
    
})