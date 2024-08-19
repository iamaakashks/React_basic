import React, { useState } from 'react';
import Form from './components/Form.jsx';
import Cards from './components/cards.jsx';
export default function App(){

  const [user, setUser] = useState([]);

  const handleFormSubmitData = (data)=>{
    setUser([...user, data])
  }

  const removeCard = (id)=>{
    setUser(()=>user.filter((item, index)=> index!=id))
  }
  return (
    <div className='w-full h-screen bg-zinc-400 flex flex-col justify-center px-10'>
      <Cards removeCard={removeCard} users={user} />
      <Form handleFormSubmitData={handleFormSubmitData}/>
    </div>
  )
}