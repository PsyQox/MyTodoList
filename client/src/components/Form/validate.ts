import { NoteT } from "../../types"

export const validate = (data:NoteT) => {
    let incorrect:any = {}
     
    if (data.title) {
        let title = data.title.trim()
        if (!title) {
            incorrect.title = "the title should not be empty"
        } else if (title.length > 30) {
            incorrect.title = "The title should be less than 30 characters"        
        }    
    } 
 
    if(data.date){
        let date = data.date.trim()
        if (!date) {
            incorrect.date = "The date should not be empty"
        }
    }
    
    if(data.priority){
        if (data.priority < 0) {
            incorrect.priority = "The priority can not be less than 0"
        }else if(data.priority > 10){
            incorrect.priority = "The priority can not be more than 10"
        }
    }

    return incorrect
}