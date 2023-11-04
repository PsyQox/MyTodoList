import {Note} from '../types';
import { ADD_NOTES } from './actionsTypes';
import { Reducer } from 'redux';

interface reducerState {
    notes: Array<Note>
}

const INITIAL_STATE: reducerState = {
    notes: [{
        title:"titulo",
        description: "asd",
        date: "28-10-2023",
        priority: 1
    },
    {
        title:"titulo",
        description: "asd",
        date: "28-10-2023",
        priority: 1
    }]
}

const rootReducer:Reducer<reducerState, any> = (state:reducerState = INITIAL_STATE, action:any)=>{
    switch (action.type) {
        case ADD_NOTES:
            return{
                ...state
            }
        default:
            return{
                ...state
            }
    }
}

export default rootReducer