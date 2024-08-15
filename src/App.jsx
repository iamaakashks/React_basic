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

import React , {useState} from 'react';
function App(){
  const [val, setVal] = useState([1, 2, 3, 4, 5]);
  return (
    <div className='p-4'>
      {val.map((items, index)=>{
        return <h1 key={index}>{items}</h1>
      })}
      <button onClick={()=>setVal(()=>val.filter((item, indices)=> indices != 2))} type='button' className='px-3 py-1 bg-red-500 text-xs text-white rounded-full'>Click</button>
    </div>
  )
}
export default App;
