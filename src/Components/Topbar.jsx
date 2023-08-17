import React from 'react'
import docsIcon from '../assets/docs-icon.png'

export default function Topbar({userPhotoURL}) {
 
  
  return (
    <div className=' bg-white w-full h-17'>
      <div className='flex items-center gap-1 '>
      <img className='w-14 h-14 m-2 ml-4 ' src={docsIcon} alt="" />
      <p className='ml-5 text-2xl'>Docs</p>
      </div>
      <img src={userPhotoURL} className='absolute top-2.5 right-2.5 h-14 w-14 rounded-full ' alt="user image" />
    
    </div>
  )
}
