// import React, { useState } from 'react';
// import Form from './components/Form.jsx';
// import Cards from './components/cards.jsx';
// export default function App(){

//   const [user, setUser] = useState([]);

//   const handleFormSubmitData = (data)=>{
//     setUser([...user, data])
//   }

//   const removeCard = (id)=>{
//     setUser(()=>user.filter((item, index)=> index!=id))
//   }
//   return (
//     <div className='w-full h-screen bg-zinc-400 flex flex-col justify-center px-10'>
//       <Cards removeCard={removeCard} users={user} />
//       <Form handleFormSubmitData={handleFormSubmitData}/>
//     </div>
//   )
// }


// import Nav from './components/Nav.jsx';
// import Routing from './utils/Routing.jsx';
// export default function App(){
//   return (
//     <>
//       <Nav />
//       <Routing />
//     </>
//   )
// }


import axios from 'axios';
import Show from './components/Show.jsx';
import { Link, Routes, Route } from 'react-router-dom';
import NewHome from './components/NewHome.jsx';
export default function App(){
  

  return (
    <>
      <nav className='p-4 flex gap-4'>
        <button className='px-3 py-1 bg-gray-200 rounded-md'><Link to="/">Home</Link></button>
        <button className='px-3 py-1 bg-gray-200 rounded-md'><Link to="/show">Show</Link></button>
      </nav>
      <Routes>
        <Route path='/' element={<NewHome/>}/>
        <Route path='/show' element={<Show/>}/>
      </Routes>
      <hr />
      <Show />
    </>
  )
}