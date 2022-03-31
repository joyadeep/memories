import React, { useState } from 'react';
import CreateNotes from './components/CreateNotes';
import Header from './components/Header';
import NoteList from './components/NoteList';
import { noteModel } from './Models/noteModels';
// import logo from './logo.svg';
// import './App.css';

const App:React.FC=() =>{
  const[notes,setNotes]=useState<noteModel[]>([]);
  return (
    <>
    <Header/>
    <CreateNotes notes={notes} setNotes={setNotes}/>
    <NoteList notes={notes} setNotes={setNotes}/>
    </>
  );
}

export default App;
