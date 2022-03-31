import React, { useRef } from 'react'
import {noteModel} from '../Models/noteModels'

type CreateProps={
  notes: noteModel[],
  setNotes:React.Dispatch<React.SetStateAction<noteModel[]>>
}


const CreateNotes:React.FC<CreateProps> = ({notes,setNotes}) => {

  const titleRef=useRef<HTMLInputElement | null>(null);
  const memoryRef=useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit=(e:React.FormEvent<HTMLFormElement>):void=>{
    e.preventDefault();
    if(titleRef.current?.value==="" || memoryRef.current?.value==="")
    {
      return alert("Fields cannot be empty")
    }
    setNotes([...notes,{
      id:new Date().toISOString(),
      title:(titleRef.current as HTMLInputElement).value,
      text:(memoryRef.current as HTMLTextAreaElement).value,
      date: new Date().toString()
    }]);

    (titleRef.current as HTMLInputElement).value="";
    (memoryRef.current as HTMLTextAreaElement).value="";
  }

  return (
    <>
    <div className='w-full sm:w-1/3 mx-auto h-fit  space-y-3 px-5 pb-5 mt-7 '>
      <form onSubmit={(e)=>handleSubmit(e)} className='flex flex-col space-y-5 bg-slate-200 px-5 py-4 rounded-md shadow-lg'>
        <input className='pl-5 outline-none border-2 border-slate-300 h-14 sm:h-10 rounded-lg text-2xl ' ref={titleRef} type="text" placeholder='title' />
        <textarea  className='w-full h-40 sm:h-32 pl-5 pr-2 py-3 text-xl outline-none border-2 border-slate-300 resize-none rounded-lg' placeholder='memory' ref={memoryRef}></textarea>
        <button type="submit"  className='bg-blue-600 font-semibold outline-none text-white w-32 text-xl   px-3 py-1  rounded-full'>Add</button>
        
      </form>
    </div>
    </>
  )
}

export default CreateNotes