import { useState } from "react"

const Modal =()=>{

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
          <button className="bg-cyan-500 py-2 px-6 rounded-lg text-white font-bold m-5" onClick={()=> setIsOpen(true)}>Open modal</button>  
          {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center ">
            <div className="bg-white p-5 rounded flex flex-col justify-center items-center gap-5">
                <label htmlFor="">Name</label>
                <input type="text" className="border-2"/>
                <button className="border-2">Submit</button>
            <div>
                <button className="bg-red-500 py-2 px-6 rounded-lg text-white font-bold m-5" onClick={()=> setIsOpen(false)}>Close modal</button>
            </div>
            </div>
            
          </div>
          )}
          
          
        </>
    )
}

export default Modal