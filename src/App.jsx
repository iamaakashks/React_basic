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
import { useState } from 'react';

export default function App(){
  const [products, setProducts] = useState([]);
  const getProducts = ()=>{
    const api = "https://api.escuelajs.co/api/v1/products";

    axios
    .get(api)
    .then((products)=> {
      setProducts(products.data);
    })
    .catch((err)=> console.log(err));
  }

  console.log(products);
  return (
    <>
      <div className='p-4'>
        <button onClick={()=>getProducts()} className='bg-blue-400 text-white px-5 py-2 rounded-md'>Call Api</button>
      </div>
      <hr />
      {products.length > 0 ? products.map((elem, index)=>
        <div key={index} className='h-52 bg-yellow-100 rounded-md m-4 px-2 py-1 text-gray-600 '>
          {
            <div>
              <h1 className='mb-6 text-sm'>{elem.title}</h1>
              <div className='flex justify-between gap-2'>
                <img className='h-32 w-32 rounded-full' src={elem.images[0]} alt="" />
                <p className='text-sm'>{elem.description}</p>
              </div>
            </div>
          }
        </div>
      ) : <h1>Loading...</h1>}
    </>
  )
}