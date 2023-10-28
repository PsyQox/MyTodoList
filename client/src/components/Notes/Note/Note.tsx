

interface Note {
    title: string,
    description: string,
    date: string,
    priority: number
}

const Note = ()=>{
    const notes: Note[] = [
    {
        title:"titulo",
        description: "asd",
        date: "28-10-2023",
        priority: 1
    },
    {
        title:"titulo",
        description: "asd",
        date: "28-10-2023",
        priority: 1
    },
    {
        title:"titulo",
        description: "asd",
        date: "28-10-2023",
        priority: 0
    },
]

    return(
        <div>
            {notes.map(note=>{
                return(<div>
                    <h2>{note.title}</h2>
                    <p>{note.description}</p>
                    <p>{note.date}</p>
                    <p>{note.priority}</p>
                </div>
                )
            })}
        </div>
    )
}

export default Note