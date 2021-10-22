const settAndGetNotes = ()=>{
    
    const notesJSON =localStorage.getItem('notes')
    if(notesJSON!==null)
    {
        return JSON.parse(notesJSON)
    }
    else{
        return []
    }

}

const saveNotes=()=>{
    localStorage.setItem('notes',JSON.stringify(notes))
}




