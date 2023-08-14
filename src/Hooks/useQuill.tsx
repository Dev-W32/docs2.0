import React,{useState} from 'react'

const useQuill = () => {

    const [value, setValue] = useState('');
    

  return (
    <ReactQuill theme="snow" value={value} onChange={setValue} />;
  )
}

export default useQuill
