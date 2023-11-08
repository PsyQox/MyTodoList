import { reducerState } from "../../../types"
import { useSelector } from "react-redux"


const Note = ()=>{ 
    const notes = useSelector((state:reducerState)=> state.notes)

    return(
        <div className="flex flex-wrap">
            {notes.map(note=>{
                return(<div key={note.title} className="flex flex-wrap justify-center items-center flex-col bg-slate-600 rounded-xl text-fuchsia-50 m-5 p-5">
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