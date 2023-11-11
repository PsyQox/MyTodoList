import { ADD_NOTES } from './actionsTypes'
import { NoteT } from '../types'

export const addNotes =(note:NoteT)=>{
    return{
        type: ADD_NOTES,
        payload: note
    }
}