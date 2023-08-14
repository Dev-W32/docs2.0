import React, {useEffect, useState} from 'react'
import { getDocuments } from '../Api/Firestore'

const DocsList = ({openDoc}) => {
    
    const [docs, setDocs] = useState([{
        id:'',
        username:'',
        value:''
    }]);
    const getDocs =async () => {
        let response = await getDocuments(setDocs)
    }

    useEffect(()=>{
        getDocs();
    },[]);
    console.log(docs);
    
  return (
    <div className='flex flex-row flex-wrap gap  mt-8 items-center justify-center'>
      {docs.map((doc)=>{
        if(doc.value!=''){
        return (
            <div onClick={()=> openDoc(doc.id)} className=' w-48 h-48 bg-white  border-solid border-gray-300 cursor-pointer  hover:border-blue-400  '>{
                
              doc.value
                
                }</div>
        )}
        
      })}

    </div>
  )
}

export default DocsList
