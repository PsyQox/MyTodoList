

const Form = () =>{
    return(
        <div className="flex flex-wrap flex-col justify-center items-center">
            <h1>Form</h1>
            <label htmlFor="">Title:</label>
            <input className="border-solid border-black border-2 rounded-lg w-60" type="text" name="title" id="title" />
            <label htmlFor="">Description:</label>
            <textarea className="border-solid border-black border-2 rounded-lg w-60" name="description" id="description" cols={30} rows={2}></textarea>
            <label htmlFor="">Date</label>
            <input className="border-solid border-black border-2 rounded-lg w-60" type="date" name="date" id="date" />
            <label htmlFor="">Priority:</label>
            <input className="border-solid border-black border-2 rounded-lg w-60" type="number" name="priority" id="priority" />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-5">Save</button>
        </div>
    )
}

export default Form