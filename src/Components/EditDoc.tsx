import { Button } from 'antd'
import React, { useState, useRef, useEffect } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import ReactQuill, { Quill } from 'react-quill';
import './EditDoc.css'
import { QuillToolbar, modules, formats } from '../Toolbar';
import { createDoc, editDoc } from '../Api/Firestore';


const EditDoc = ({ id, handleEdit }) => {

    let qiullRef = useRef<any>(null);

    const [value, setValue] = useState('');
    const [title, settitle] = useState('')
    useEffect(() => {
        qiullRef.current.focus();
        setValue()
    }, [])


    function addDocData() {
        let payload = {
            value,

        }
        createDoc({ payload })
    }

    function editDocument() {
        let payload = {
            value,
        };
        editDoc({ payload, id })
    }


    useEffect(() => {
        const debounced = setTimeout(() => {
            addDocData()
        }, 2000)

        return () => clearTimeout(debounced)


    }, [value])

    return (
        <div className='edit-container flex flex-col items-center justify-center' >
            <div className=''>
                <BiArrowBack onClick={handleEdit} size={30} className="mt-6 left-8 absolute cursor-pointer " />
                <input onChange={(e)=>{
                    settitle(e.target.value)
                }} className='text-black left-20 top-28 mt-1 absolute bg-transparent border-none p-2 outline-none' type="text" placeholder='Untitled' />
                </div>
            <div className=' quill-container w-11/12  mt-24  '>
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
    )
}

export default EditDoc
