import React from 'react'
import { noteModel } from '../Models/noteModels'
import Notes from './Notes'

type NoteProp={
    notes: noteModel[],
    setNotes:React.Dispatch<React.SetStateAction<noteModel[]>>
}

const NoteList:React.FC<NoteProp> = ({notes,setNotes}) => {
    const handleDelete=(id:string)=>{
        setNotes(notes.filter(note=>note.id !==id))
    }
    const renderNote=():JSX.Element=>{
        return (

            <>
            <div className='w-full h-fit flex flex-wrap justify-center sm:justify-evenly'>
            {notes.map((note)=>{
             return (
                         <Notes key={note.id} note={note} handleDelete={handleDelete}/>     
                 ) 
                  })} 
            </div>
            </>
        )
    }


  return (
    <>
        <div className='w-full h-fit mt-5 px-5'>
            {renderNote()}
        </div>
    </>
  )
}

export default NoteList