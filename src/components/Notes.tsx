import React from 'react'
import { noteModel } from '../Models/noteModels'

type noteProp={
    note:noteModel,
    handleDelete:(id: string) => void
}

const Notes:React.FC<noteProp> = ({note,handleDelete}) => {
  return (
     <>
        <div className='bg-sky-800 h-fit w-full mb-5 space-y-5 text-justify  sm:w-72 text-white p-4 rounded-md'>
            <div className='text-2xl font-semibold'>{note.title}</div>
            <div className='text-2xl sm:text-xl '> {note.text} </div>
            <div className='text-sm'> {note.date} </div>
            <div>ID : {note.id} </div>
            <button onClick={()=>{handleDelete(note.id)}} className='bg-red-600 px-3 py-1 mt-4 rounded-full text-md'>Delete</button>
        </div>
     </>
    
  )
}


export default Notes