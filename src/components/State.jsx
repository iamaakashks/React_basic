import React, {useState} from 'react';

function State(){
    const songs = [
        {name:'Ishaqzaade', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
        {name:'Meet', description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, sunt?'},
        {name:'Billo Rani', description:'Lorem ipsum dolor sit.'}
    ]
    let ans = useState(false); //it gives array with two elements: (1) value (2) function to update the value
    return (
        <div className='main p-4 w-full h-screen bg-gray-200'>
            <div className='flex flex-row items-center px-3 py-3 box h-40 w-96 bg-gray-700 rounded-md'>
                <div className='h-full w-[40%] bg-red-200 rounded-md'>
                    <img className='h-full w-full object-cover rounded-md' src="https://i.pinimg.com/originals/ae/cd/16/aecd163d40034de66a4b064c7bc51d58.jpg" alt="" />
                </div>
                <div className='ml-4 text-zinc-100 flex flex-col gap-2 items-start'>
                    <h1 className='text-xl'>Ishaqzaade</h1>
                    <p className='text-sm'>Lorem ipsum dolor sit.</p>
                    <div className='buttons flex flex-row gap-2'>
                        <button onClick={()=>{
                            alert("playing");
                        }} type='button' className='flex flex-row justify-center items-center px-3 py-1 text-zinc-100 rounded-full bg-red-600'><i class="ri-play-fill"></i> Play</button>
                        <button type='button' className='px-3 py-1 text-zinc-100 rounded-full bg-red-600'><i class="ri-download-fill"></i> Download</button>
                    </div>
                </div>
            </div>
        </div> 
    )
}
export default State;