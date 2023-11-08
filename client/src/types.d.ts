export interface NoteT {
    title: string,
    description: string,
    date: string,
    priority: number
}

export interface reducerState {
    notes: Array<NoteT>
}