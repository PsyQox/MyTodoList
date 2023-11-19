import Notes from "../../components/Notes/Notes"
import Form from "../../components/Form/Form"
import Modal from "../../components/Modal/Modal"

const Home = ()=>{

    return(
        <div>
            <h1>I'm Home and show the notes!</h1>
            <Modal />
            <Form />
            <Notes />
        </div>
    )
}

export default Home