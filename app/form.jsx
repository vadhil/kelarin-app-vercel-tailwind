import React, { useState } from 'react'
import dynamic from "next/dynamic";





const Form =()=> {

  const [newPost, setNewPost] = useState('');


    const handleInput =  () =>{
        addDoc(collection(db, "posts"), {
          posts: newPost 
      })}
    
  return (
    <div>
         <form className="flex justify-center gap-2 mt-56">
          <input type="text" className='p-2 px-5 border rounded-md' placeholder='apa yang anda butuhkan?' 
          onChange={(e)=> setNewPost(e.target.value)} value={newPost}></input>
          <button 
          onClick={()=> handleInput()}
          className='p-1 px-4 rounded-md bg-primary text-tertiary'>Post</button>
      </form>
    </div>
  )
}

export default dynamic (() => Promise.resolve(Form), {ssr: false})
