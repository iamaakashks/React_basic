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


// import Show from './components/Show.jsx';
// import Services from './components/Services.jsx';
// import { Link, Routes, Route } from 'react-router-dom';
// import NewHome from './components/NewHome.jsx';
// export default function App(){
  

//   return (
//     <>
//       <nav className='p-4 flex gap-4'>
//       <Link to="/"><button className='px-3 py-1 bg-gray-200 rounded-md'>Home</button></Link>
//       <Link to="/services" element={<Services/>}><button className='px-3 py-1 bg-gray-200 rounded-md'>Services</button></Link>
//       <Link to='/show'><button className='px-3 py-1 bg-gray-200 rounded-md'>Show</button></Link>
//       </nav>
//       <hr />
//       <Routes>
//         <Route path='/' element={<NewHome/>}/>
//         <Route path='/show' element={<Show/>}/>
//         <Route path='/services' element={<Services/>}/>
//       </Routes>
//     </>
//   )
// }

import React from 'react';
import Parent from './components/Parent.jsx';
import Childname from './components/Childname.jsx';
import Childdetails from './components/Childdetails.jsx';
import { NavLink, Route, Routes } from 'react-router-dom';
export default function App(){
  return (
    <div className='w-2/3 py-4 container m-auto h-screen'>
      <nav className='flex gap-10 justify-center underline'>
        <NavLink className={(elem)=>{
          if(elem.isActive){
            return "text-red-400 font-bold opacity-40"
          }
        }} to='/'>Parent</NavLink>
        <NavLink className={(elem)=>{
          if(elem.isActive){
            return "text-red-400 font-bold opacity-40"
          }
        }} to='/childname'>Childname</NavLink>
        <NavLink className={(elem)=>{
          if(elem.isActive){
            return "text-red-400 font-bold opacity-40"
          }
        }} to='/childdetails'>Childdetails</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Parent/>} />
        <Route path='/childname' element={<Childname/>} />
        <Route path='/childdetails' element={<Childdetails/>} />
      </Routes>
    </div>
  )
}