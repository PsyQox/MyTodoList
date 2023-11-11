import {reducerState} from '../types';
import { ADD_NOTES } from './actionsTypes';
import { Reducer } from 'redux';



const INITIAL_STATE: reducerState = {
    notes: [{
        title:"titulo",
        description: "asd",
        date: "28-10-2023",
        priority: 1
    },
    {
        title:"titulo2",
        description: "asd",
        date: "28-10-2023",
        priority: 1
    }]
}

const rootReducer:Reducer<reducerState, any> = (state:reducerState = INITIAL_STATE, action:any)=>{
    switch (action.type) {
        case ADD_NOTES:
            return{
                ...state, notes: [...state.notes, action.payload]
            }
        default:
            return{
                ...state
            }
    }
}

export default rootReducer