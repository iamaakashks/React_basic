import React from 'react';
export default function Card({users, removeCard, key, id}){
    const {name, email, image} = users;
    return (
            <div className='px-2 gap-2 rounded-md w-48 bg-slate-300 flex flex-col items-center'>
                <div className='mt-2 h-20 w-20 bg-purple-400 overflow-hidden rounded-full'>
                    <img className='w-full h-full object-cover' src={image} alt="" />
                </div>
                <h3 className='leading-none font-semibold text-lg'>{name}</h3>
                <h4 className='leading-none font-medium text-sm opacity-40'>{email}</h4>
                <p className='text-center text-xs leading-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, sit.</p>
                <button onClick={()=>removeCard(id)} type='button' className='px-5 py-1 bg-red-500 text-white rounded-full text-sm font-semibold mb-2'>Remove</button>
            </div>
    )
}