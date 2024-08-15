import React from 'react';

function Card(){
    const songs = [
        {name:'Ishaqzaade', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
        {name:'Meet', description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, sunt?'},
        {name:'Billo Rani', description:'Lorem ipsum dolor sit.'}
    ]
    const downloadButton = ()=>{
        alert("Download starting in 10 sec");
    }
    return (
        <div className='w-full h-screen bg-gray-300 px-10 py-8 flex flex-col gap-4'>
            {songs.map((elem, index)=>(
                <div key={index} className='px-2 py-1 w-[30%] bg-slate-50 rounded-md flex flex-col'>
                    <h1 className='song font-semibold text-xl'>{elem.name}</h1>
                    <p className='text-xs mt-2'>{elem.description}</p>
                    <button onMouseOver={downloadButton } className='download mx-auto mb-2 px-2 py-2 rounded-lg mt-2 text-sm bg-blue-500 text-neutral-200'>Download Now</button>
                </div>
            ))}
        </div>
    )
}
export default Card;