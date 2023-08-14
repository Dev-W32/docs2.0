import React,{useEffect} from 'react'



const useDebounced = ({addDocData, value}) => {

    useEffect(() => {
        const debounced = setTimeout(()=>{
             addDocData()   
        },2000)

        return ()=> clearTimeout(debounced)


    },[value])
}

export default useDebounced
