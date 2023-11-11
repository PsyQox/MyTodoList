import { useState } from "react"
import { useDispatch} from "react-redux"
import { addNotes } from "../../redux/actions"
import { NoteT } from "../../types"

const Form = () =>{
    const dispatch = useDispatch()

    const initialFormState:NoteT = {
        title: '',
        description: '',
        date: '',
        priority: 0
    }

    const [form, setForm] = useState<NoteT>(initialFormState)

    const onHandleSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        dispatch(addNotes(form))
    }

    const onHandleChange = (event:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
        setForm({...form, [event.target.name]:event.target.value})
    }

    const validate = (data:any) => {
        
    }

    return(
        <div className="flex flex-wrap flex-col justify-center items-center">
            <h1>Form</h1>
            <form className="flex flex-wrap flex-col justify-center items-center" onSubmit={onHandleSubmit} action="">
                <label htmlFor="">Title:</label>
                <input className="border-solid border-black border-2 rounded-lg w-60" onChange={onHandleChange} type="text" name="title" id="title" value={form.title}/>
                <label htmlFor="">Description:</label>
                <textarea className="border-solid border-black border-2 rounded-lg w-60" onChange={onHandleChange} name="description" id="description" cols={30} rows={2}></textarea>
                <label htmlFor="">Date</label>
                <input className="border-solid border-black border-2 rounded-lg w-60" onChange={onHandleChange} type="date" name="date" id="date" />
                <label htmlFor="">Priority:</label>
                <input className="border-solid border-black border-2 rounded-lg w-60" onChange={onHandleChange} type="number" name="priority" id="priority" />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-5" type="submit">Save</button>                              
            </form>
            
        </div>
    )
}

export default Form