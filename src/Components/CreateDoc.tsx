import React, {  useState } from 'react'
import newDocImage from '../assets/docs-blank-googlecolors.png'
import EditDoc from './EditDoc';
import { createDoc } from '../Api/Firestore';
import useDebounced from '../Hooks/useDebounced';




const CreateDoc = ({id, isEdit, handleEdit}) => {



 

    const crateDocument = ()=>{
        if(!isEdit){
          let payload = {
            value:"",
  
          };
          createDoc({payload})
        }
    }

  

  if(isEdit ){
    return <EditDoc id={id} handleEdit={handleEdit}/>;
  }

  return (
    <div className='new-doc-container bg-gray-200 flex justify-center  '>
      <div className='new-doc-inner w-7/12 '>
      <p> Start a New Document </p>
      <div className='start-doc ' >
        <div className='start-doc-card w-40 h-48  border-solid border-transparent cursor-pointer  hover:border-blue-400 ' >
          <img  className="w-40 h-48" src={newDocImage} onClick={()=>{
            handleEdit();
            crateDocument();
          }} alt="" />
        </div> 
        <p className='title '> Blank </p>
        
        </div>
      </div>
    </div>
  )
}

export default CreateDoc
