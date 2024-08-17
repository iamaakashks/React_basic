// import React, {useState} from "react";
// import Card from "./components/Card.jsx";
// import State from './components/State.jsx';

// function App(){
//   const [score, setScore] = useState(0); //destructuring
  
//   return (
//     <>
//       <div className='p-5'>
//         <h1>{score}</h1>
//         <button onClick={()=>{
//           return setScore((prev)=>{
//             return prev+1
//           })
//         }} type='button' className='px-4 mt-2 py-1 bg-blue-500 text-zinc-300 rounded-full'>Change</button>
//       </div>
      
//       {/* <Card/> */}
//       {/* <State /> */}
//       {/* <div>
//         {data.map((elem, index)=>(<div key={index} className='px-3 py-4 bg-zinc-300 rounded-md w-fit'>{elem}</div>))}
//       </div> */}
//       <h1>made with ❤️ by Aakash</h1>
//     </>
//   )
// }

// export default App;


// import React , {useState} from 'react';

// function App(){
//   const [value, setValue] = useState({name: "Harsh", isBanned: false});

//   return (
//     <div>
//       <div className='p-5'>
//         <h2>name: {value.name}</h2>
//         <h2>Banned: {value.isBanned? "Banned":"not Banned"}</h2>
//         <button onClick={()=>{
//           return setValue({...value, isBanned: !value.isBanned})
//         }} type='button' className={`px-3 py-1 text-xs ${value.isBanned? 'bg-blue-500' : 'bg-red-500'} text-white rounded-full`}>Ban karo</button>
//       </div>
//     </div>
//   )
// }

// export default App;

// import React , {useState} from 'react';

// function App(){
//   const [val, setVal] = useState({name: "Aakash", age:21});
//   return (
//     <div>
//       <button onClick={()=>{
//         setVal({...val, gender:"male"});
//         console.log(val.gender);
//       }} type='button' className='px-3 py-1 bg-red-500 text-xs text-white rounded-full'>Click</button>
//     </div>
//   )
// }

// export default App;

// import React , {useState} from 'react';
// function App(){
//   const [val, setVal] = useState([1, 2, 3, 4, 5]);
//   return (
//     <div className='p-4'>
//       {val.map((items, index)=>{
//         return <h1 key={index}>{items}</h1>
//       })}
//       <button onClick={()=>setVal(()=>val.filter((item, indices)=> item%2 !== 0))} type='button' className='px-3 py-1 bg-red-500 text-xs text-white rounded-full'>Click</button>
//     </div>
//   )
// }
// export default App;


// import React, {useState} from 'react';
// function App(){
//   // const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);
//   const [val, setVal] = useState([
//     {name: "Harsh", age: 24},
//     {name: "Shivam", age:25},
//     {name: "kohli", age: 32}]);
//   return (
//   <div className='p-4'>
//     {val.map((items, index)=>(
//       <div key={index}>
//         <h1>{items.name}</h1>
//         <h2>{items.age}</h2>
//       </div>
//     ))}
//     <button onClick={()=>setVal(()=>val.map(items=> items.name === "Shivam"? ({name: "Shivam", age: 26}): items))} type='button' className='px-3 py-1 bg-red-500 text-xs text-white rounded-full'>Click</button>
//     {/* <button onClick={()=>{
//       return setVal([...val, val[val.length-1]+1])
//     }} type='button' className='px-3 py-1 bg-red-500 text-xs text-white rounded-full'>Click</button> */}
//   </div>
//   )
// }

// export default App;

// import React, {useState} from 'react';

// function App(){
//   const [val, setVal] = useState([
//     {name: "Aakash", age: 21},
//     {name: "Ankit", age: 22},
//     {name: "Shivani", age:24}
//   ]);
//   return (
//     <div className='p-4'>
//       {val.map((items, index)=>{
//         return <div key={index}>
//           <h1>{items.name}</h1>
//           <h1>{items.age}</h1>
//         </div>
//       })}
//       <button onClick={()=>setVal(()=>val.map((items, indices)=> items.name.toLowerCase() === "Ankit".toLowerCase() ? ({name: "Ankit", age: 23}) : items))} type='button' className='px-4 py-2 text-sm rounded-full bg-red-500 text-white'>Click</button>
//     </div>
//   )
// }

// export default App;

// import React, {useState} from 'react';
// import { VscArrowRight } from "react-icons/vsc";

// function App(){
//   const [val, setVal] = useState(false);
//   return (
//     <div className='w-full h-screen bg-zinc-500 flex justify-center items-center'>
//       <div className='relative w-80 h-60  bg-zinc-200 rounded-lg flex overflow-hidden'>
//         <img className={`${val === false? "-translate-x-[0%]" : "-translate-x-[100%]"} transition-transform duration-500 ease-in shrink-0 w-full h-full object-cover`} src="https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//         <img className={`${val === false? "-translate-x-[0%]" : "-translate-x-[100%]"} transition-transform duration-500 ease-in shrink-0 w-full h-full object-cover`} src="https://images.unsplash.com/photo-1592853625601-bb9d23da12fc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//         <span onClick={()=>setVal(()=> !val)} className='p-3 bg-[#dadada4b] rounded-full text-xl absolute top-52 active:bg-[#dadada3b] cursor-pointer left-1/2 translate-x-[-50%] translate-y-[-50%]'>
//           <VscArrowRight />
//         </span>
//       </div>
      
//     </div>
//   )
// }

// export default App;

import React, { useState } from 'react';
import NewCard from './components/NewCard.jsx';

export default function App(){
  const data = [
    {name: "Salman Khan", description: "Actor", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ3qcjwcwgXQ1G_GeuQLKxi7czVYIJ6dVKYA&s", friends: false},
    {name: "M S Dhoni", description: "Cricketer", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsqJuzAo5RCBarZyMBIJeB2D0M-MQgPy_bw&s", friends: false },
    {name: "Neeraj Chopra", description: "Athelete", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOQFLzV8jG45ZcxqoTnwZxcLTDgMMLM-ymyQ&s", friends : false }
  ]

  const [realData, setRealData] = useState(data);

  const handleFriendButton = (cardIndex)=>{
    setRealData((previous)=>{
      return previous.map((item, index)=>{
        if(index === cardIndex){
          return {...item, friends: !item.friends};
        }
        return item;
      })
    })
  }
  return (
    <>
      <div className='w-full h-screen bg-red-200 flex justify-center items-center gap-2'>
        {
          realData.map((items, index)=>(
            <NewCard handleClick={handleFriendButton} index={index} key={index} name={items.name} image={items.image} description={items.description} friendsStatus={items.friends}/>
          ))
        }
      </div>
    </>
  )
}

