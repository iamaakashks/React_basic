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



import React, { useState } from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import About from './components/About.jsx';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
export default function App(){
  return (
    <>
      <nav className='flex p-6 space-x-24 w-full justify-end bg-red-200 fixed top-0'>
        <Link to='/'>
          Home
        </Link>
        <Link to='/about'>
          About
        </Link>
        <Link to='/contact'>
          Contact
        </Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </>
  )
}