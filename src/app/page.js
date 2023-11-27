'use client'
import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
const App = () => {
  const [userinfo,setUserinfo] = useState({email:'',password:''})
const handleSubmit = async () => {
  const res = await  signIn('credentials',{
    email:userinfo.email,
    password:userinfo.email,




  });
  console.log(res)
}
  return (
    <div>
      <input onChange={({target}) => setUserinfo({...userinfo,email:target.value})}/>
      <input onChange={({target}) => setUserinfo({...userinfo,password:target.value})}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default App
