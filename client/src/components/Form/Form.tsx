import { useState } from "react"
import { useDispatch} from "react-redux"
import { addNotes } from "../../redux/actions"
import { NoteT } from "../../types"
import { validate } from "./validate"

const Form = () =>{
    const dispatch = useDispatch()

    const initialFormState:NoteT = {
        title: '',
        description: '',
        date: '',
        priority: 0
    }


    const [form, setForm] = useState<NoteT>(initialFormState)
    const [errors, setErrors] = useState<any>({})

    const onHandleSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        if (Object.keys(errors).length <= 0) {
            if (!form.title || !form.priority || !form.date) {
                alert("Missing data")
            }else{
                dispatch(addNotes(form))
            }
        }else{
            alert('There are still errors.')
        }
    }

    const onHandleChange = (event:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
        setForm({...form, [event.target.name]:event.target.value})
        setErrors(validate({...form, [event.target.name]:event.target.value}))
    }


    return(
        <div className="flex flex-wrap flex-col justify-center items-center">
            <h1>Form</h1>
            <form className="flex flex-wrap flex-col justify-center items-center" onSubmit={onHandleSubmit} action="">
                <label htmlFor="">Title:</label>
                <input className="border-solid border-black border-2 rounded-lg w-60" onChange={onHandleChange} type="text" name="title" id="title" value={form.title}/>
                {errors.title ? (<a className=" text-red-600">{errors.title}</a>):null}
                <label htmlFor="">Description:</label>
                <textarea className="border-solid border-black border-2 rounded-lg w-60" onChange={onHandleChange} name="description" id="description" cols={30} rows={2}></textarea>
                <label htmlFor="">Date</label>
                <input className="border-solid border-black border-2 rounded-lg w-60" onChange={onHandleChange} type="date" name="date" id="date" />
                {errors.date ? (<a className=" text-red-600">{errors.date}</a>):null}
                <label htmlFor="">Priority:</label>
                <input className="border-solid border-black border-2 rounded-lg w-60" onChange={onHandleChange} type="number" name="priority" id="priority" />
                {errors.priority ? (<a className=" text-red-600">{errors.priority}</a>):null}
                { !form.title || !form.priority || !form.date ? (<button className=" bg-blue-300 font-bold py-2 px-4 rounded-lg  focus:outline-none mt-5 text-white" disabled> Save </button>):(<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-5" type="submit">Save</button>)}
            </form>
            
        </div>
    )
}

export default Form