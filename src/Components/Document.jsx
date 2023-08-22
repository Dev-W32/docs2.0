import React, {useState} from 'react'
import Topbar from './Topbar'
import CreateDoc from './CreateDoc';
import DocsList from './DocsList';

function Document({userPhotoURL}) {

  const [id,setId] = useState('');

  const openDoc= (id)=>{
      setIsEdit(!isEdit);
      setId(id);
  }

  const [isEdit, setIsEdit] = useState(false);
  const  handleEdit= ()=>{
    setIsEdit(!isEdit);
  }



  return (
    <div>
       
        <CreateDoc id={id} handleEdit={handleEdit} isEdit={isEdit} />
       { isEdit ?<div></div> : <DocsList openDoc={openDoc}/>}
    </div>
  )
}

export default Document;