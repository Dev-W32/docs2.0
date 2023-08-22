import { Button } from 'antd'
import React, { useState, useRef, useEffect } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import ReactQuill, { Quill } from 'react-quill';
import './EditDoc.css'
import { QuillToolbar, modules, formats } from '../Toolbar/Toolbar';
import { createDoc, editDoc, getCurrentDoc } from '../Api/Firestore';
import {Input} from 'antd';
import Document from './Document';


const EditDoc = ({ id }) => {

    let qiullRef = useRef(null);

    const [value, setValue] = useState('');
    const [title, setTitle] = useState('Untitled');
    const [isSaving, setIsSaving] = useState("");

    function editDocument() {
        let payload = {
          value,
          title,
        };
        editDoc(payload, id);
      }
    
      const getCurrentDocument = () => {
        if (id) {
          getCurrentDoc(id, setValue, setTitle);
        }
      };
    
      useEffect(() => {
        setIsSaving("");
        const debounced = setTimeout(() => {
          editDocument();
        }, 500);
    
        return () => {
          clearTimeout(debounced);
        };
      }, [value, title]);
    
      useEffect(() => {
        getCurrentDocument();
        if(!isbackClicked){
          qiullRef.current.focus();
        }
      }, []);
    
      console.log(isSaving);

      const [isbackClicked, setIsbackClicked] = useState(false);
      
      const handleBackClick = ()=>{
        setIsbackClicked(!isbackClicked);

      }

      if(isbackClicked){
        return <Document/>
      }
      else{
    return (
        

        <div className='edit-container flex flex-col items-center justify-center' >
             <div className=''>
              
               <BiArrowBack onClick={handleBackClick}   size={30} className="mt-4 left-20 top-28 absolute cursor-pointer " />
                <Input 
                value={title}
                onChange={(event) => setTitle(event?.target.value)}
                placeholder="Enter the Title"
                className='title-input text-3xl text-black left-28 w-80 top-28 mt-1 ml-20 absolute bg-transparent border-none p-2 outline-none' type="text"  />
                
             
                <div className=' quill-container ml-7  mt-24  '>
                <QuillToolbar />
                <ReactQuill
                    className='ql-container ql-snow'
                    theme="snow"
                    ref={qiullRef}
                    value={value}
                    onChange={setValue}
                    modules={modules}
                    formats={formats}
                />
            </div>


                </div>



         
        </div>
    )}
}

export default EditDoc
