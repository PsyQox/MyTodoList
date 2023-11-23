import Notes from "../../components/Notes/Notes"
import Form from "../../components/Form/Form"
import Modal from "../../components/Modal/Modal"
import { useState } from "react"

const Home = ()=>{
const [isOpen, setIsOpen] = useState<boolean>(false);

    return(
        <div>
            <h1>I'm Home and show the notes!</h1>
            <button className="bg-red-500 text-white p-3 m-10 rounded-lg" onClick={()=> setIsOpen(true)}>Open</button>
            <Modal isOpen={isOpen} onClose={()=>setIsOpen(false)}>
                <Form />
            </Modal>
            <Notes />
        </div>
    )
}

export default Home