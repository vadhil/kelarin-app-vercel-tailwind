"use client"

import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { signOut } from 'firebase/auth';
import { auth, db } from '@/config/firebase-config';
import Login from './login';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import Form from './form';


const cookies = new Cookies();


export default function Page() {

  const [isAuth, setIsAuth] = useState(cookies.get('auth-token'));
  const [newPost, setNewPost] = useState('');
  const [posts, setPosts] = useState([])


  const handleRead = async () => {
    const datas = await getDocs(collection(db, "posts"));
    setPosts(datas.docs.map((data)=> data.data()))
    console.log(posts);
}
  const handleInput =  () =>{
    addDoc(collection(db, "posts"), {
      posts: newPost 
  })
    setNewPost("");
  }
  const handleLogOut =  () => {
    signOut(auth);
    setIsAuth(false);
    cookies.remove('auth-token')
  }

  useEffect(()=>{
    handleRead()
  },[])


  
  
    if (!isAuth) {
    return (
      <div>
        <Login setIsAuth={setIsAuth}/>
      </div>
    ) }else {
      return (
    <div>
      <div>
       <div className="flex justify-center gap-2 mt-56">
                  <input type="text" className='p-2 px-5 border rounded-md' placeholder='apa yang anda butuhkan?' 
                  onChange={(e)=> setNewPost(e.target.value)} value={newPost}></input>
                  <button 
                  onClick={()=> handleInput()}
                  className='p-1 px-4 rounded-md bg-primary text-tertiary'>Post</button>
        </div>
        <div className="posts">
            {posts.map((post)=>{
              return (
                <h3>{post.posts}</h3>
                )
            })}
        </div>
        <div className="logout flex justify-center mt-56">
          <button onClick={()=> handleLogOut()} className=
          'p-3 mx-0 bg-center bg-secondary  rounded-lg text-primary'>log out</button>    
        </div>
        </div>   
      </div>
      )
    }
}


